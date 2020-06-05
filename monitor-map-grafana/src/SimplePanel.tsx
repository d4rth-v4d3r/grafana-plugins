import { PanelProps } from '@grafana/data';
import Map from 'map/Map';
import React from 'react';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
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
};
