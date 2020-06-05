import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { Component } from 'react';
import MapGL, { FullscreenControl, NavigationControl, Popup, ScaleControl } from 'react-map-gl';
import { MapProps, PinRow } from 'types';
import ControlPanel from './Legend';
import PinInfo from './PinInfo';
import Pins from './Pins';

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
} as CSSProperties;

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px',
} as CSSProperties;

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px',
} as CSSProperties;

export default class Map extends Component<MapProps> {
  state = {
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
      bearing: 0,
      pitch: 0,
    },
    popupInfo: null as PinRow | null,
  };

  constructor(props: MapProps) {
    super(props);
    this.state = {
      viewport: {
        latitude: Number(props.options.latitude),
        longitude: Number(props.options.longitude),
        zoom: Number(props.options.zoom),
        bearing: 0,
        pitch: 0,
      },
      popupInfo: null as PinRow | null,
    };
  }

  _updateViewport = (viewport: any) => {
    this.setState({ viewport });
  };

  _onClickMarker = (popupInfo: PinRow) => {
    this.setState({ popupInfo });
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <PinInfo {...popupInfo} keyHack={popupInfo.key} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <React.Fragment>
        <ControlPanel data={this.props.data} options={this.props.options} onClick={this._onClickMarker} />
        <MapGL
          {...viewport}
          width="100%"
          height="95%"
          mapStyle={this.props.options.style}
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={this.props.options.apiKey}
        >
          <Pins data={this.props.data} options={this.props.options} onClick={this._onClickMarker} />

          {this._renderPopup()}

          <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div style={navStyle}>
            <NavigationControl />
          </div>
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>
        </MapGL>
      </React.Fragment>
    );
  }
}
