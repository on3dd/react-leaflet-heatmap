import React from 'react';
import { Map, MapProps, TileLayer, Marker, Popup, LayersControl, FeatureGroup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import styled from 'styled-components';

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

const gradient = {
  0.1: '#89BDE0', 0.2: '#96E3E6', 0.4: '#82CEB6',
  0.6: '#FAF3A5', 0.8: '#F5D98B', '1.0': '#DE9A96'
};

const addressPoints = [
  [43.116686, 131.888419, 10],
  [43.132588, 131.905581, 10],
  [43.115483, 131.908787, 10]
];

const BaseMap = () => {
  const renderMap = () => {
    const position: [number, number] = [state.lat, state.lng];
    return (
      <StyledMap center={position} zoom={state.zoom}>
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
                gradient={gradient}
                points={addressPoints}
                max={state.max}
                radius={state.radius}
                minOpacity={state.minOpacity}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => m[2]}
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
