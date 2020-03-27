import { DataFrame, DateTime, PanelData } from '@grafana/data';

export interface PluginOptions {
  apiKey: string;
  style: string;
  culture: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

export const defaults: PluginOptions = {
  apiKey: '',
  style: '',
  culture: '',
  latitude: 0,
  longitude: 0,
  zoom: 9,
};

export interface PinRow {
  image: string;
  legend: string;
  key: string;
  name: string;
  latitude: number;
  longitude: number;
  time: DateTime;
  icon: string;
  color: string;
}

export interface PinsProps {
  options: PluginOptions;
  data: PanelData;
  onClick: (row: PinRow) => any;
}

export interface MapProps {
  options: PluginOptions;
  data: PanelData;
}

export interface PinSerieProps extends PinsProps {
  frame: DataFrame;
}
