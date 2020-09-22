import React from 'react';
import {
  Map,
  MapProps,
  TileLayer,
  Marker, Popup,
  LayersControl,
  FeatureGroup
} from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import styled from 'styled-components';

import PointsArr from '../../types/pointsArr';

const StyledMap = styled(Map) <MapProps>`
  height: inherit;
  width: inherit;
`;

type BaseMapProps = {
  lat?: number,
  lng?: number,
  zoom?: number,
  radius?: number,
  blur?: number,
  max?: number,
  minOpacity?: number,
  limitAddressPoints?: boolean,
  points?: PointsArr | null,
}

const BaseMap = ({ points = [], ...props }: BaseMapProps) => {
  const renderMap = () => {
    const position: [number, number] = [props.lat || 0, props.lng || 0];
    return (
      <StyledMap center={position} zoom={props.zoom}>
        <LayersControl>
          <LayersControl.BaseLayer name="Base" checked>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay name="Heatmap" checked>
            <FeatureGroup color="purple">
              <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={points}
                radius={props.radius}
                minOpacity={props.minOpacity}
                longitudeExtractor={(el: PointsArr) => el[1]}
                latitudeExtractor={(el: PointsArr) => el[0]}
                intensityExtractor={(el: PointsArr) => el[2]}
              />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </StyledMap>
    )
  }

  return renderMap();
}

export default BaseMap;
