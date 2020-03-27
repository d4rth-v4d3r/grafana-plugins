import '@fortawesome/fontawesome-free/css/all.css';
import { PanelProps } from '@grafana/data';
import 'moment/locale/es';
import React, { PureComponent } from 'react';
import { PluginOptions } from 'types';
import Map from './map/Map';

interface Props extends PanelProps<PluginOptions> {}

export class PluginPanel extends PureComponent<Props> {
  render() {
    const { options, data, width, height } = this.props;

    return (
      <div
        style={{
          position: 'relative',
          width,
          height,
        }}
      >
        <Map data={data} options={options} />
      </div>
    );
  }
}
