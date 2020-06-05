import { PanelPlugin } from '@grafana/data';
import { SimplePanel } from './SimplePanel';
import { SimpleOptions } from './types';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'apiKey',
      name: 'Api Key',
      description: 'Api Key',
      defaultValue: '',
    })
    .addTextInput({
      path: 'style',
      name: 'Style',
      description: 'Style',
      defaultValue: '',
    })
    .addNumberInput({
      path: 'latitude',
      name: 'Latitude',
      description: 'Latitude',
      defaultValue: 0,
    })
    .addNumberInput({
      path: 'longitude',
      name: 'Longitude',
      description: 'Longitude',
      defaultValue: 0,
    })
    .addNumberInput({
      path: 'zoom',
      name: 'Zoom',
      description: 'Zoom',
      defaultValue: 0,
    })
    .addTextInput({
      path: 'animate',
      name: 'Animate',
      description: 'Animate the last point or not',
      defaultValue: '',
    });
});
