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

const state = {
  lat: 43.1332,
  lng: 131.9113,
  zoom: 12,
  radius: 25,
  blur: 8,
  max: 1,
  minOpacity: 0.1,
  limitAddressPoints: true,
}

type BaseMapProps = {
  points?: PointsArr | null,
  center?: [number, number],
}

const BaseMap = ({ points = [] }: BaseMapProps) => {
  const renderMap = () => {
    const position: [number, number] = [state.lat, state.lng];
    return (
      <StyledMap center={[0, 0]} zoom={state.zoom}>
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
                radius={state.radius}
                minOpacity={state.minOpacity}
                longitudeExtractor={(m: PointsArr) => m[1]}
                latitudeExtractor={(m: PointsArr) => m[0]}
                intensityExtractor={(m: PointsArr) => m[2]}
              />
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Marker">
            <FeatureGroup color="purple">
              <Marker position={position} >
                <Popup>
                  <span>A pretty CSS3 popup.<br /> Easily customizable. </span>
                </Popup>
              </Marker>
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>


        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMap>
    )
  }

  return renderMap();
}

export default BaseMap;
