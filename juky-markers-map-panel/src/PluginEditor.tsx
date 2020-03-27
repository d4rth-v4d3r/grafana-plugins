import { PanelEditorProps } from '@grafana/data';
import { FormField } from '@grafana/ui';
import React, { PureComponent } from 'react';
import { PluginOptions } from './types';

export class PluginEditor extends PureComponent<PanelEditorProps<PluginOptions>> {
  state = {};

  private onApiKeyChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, apiKey: target.value });
  };

  private onStyleChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, style: target.value });
  };

  private onLatitudeChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, latitude: Number(target.value) });
  };

  private onLongitudeChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, longitude: Number(target.value) });
  };

  private onZoomChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, zoom: Number(target.value) });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
        <FormField label="Mapbox ApiKey" labelWidth={5} inputWidth={20} type="text" onChange={this.onApiKeyChanged} value={options.apiKey || ''} />
        <FormField label="Mapbox Style" labelWidth={5} inputWidth={20} type="text" onChange={this.onStyleChanged} value={options.style || ''} />
        <FormField label="Latitude" labelWidth={5} inputWidth={20} type="number" onChange={this.onLatitudeChanged} value={options.latitude || ''} />
        <FormField
          label="Longitude"
          labelWidth={5}
          inputWidth={20}
          type="number"
          onChange={this.onLongitudeChanged}
          value={options.longitude || ''}
        />
        <FormField label="Zoom" labelWidth={5} inputWidth={20} type="number" onChange={this.onZoomChanged} value={options.zoom || ''} />
      </div>
    );
  }
}
