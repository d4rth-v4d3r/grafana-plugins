import { DataFrame, DateTime, PanelData } from '@grafana/data';

export interface SimpleOptions {
  apiKey: string;
  style: string;
  latitude: number;
  longitude: number;
  zoom: number;
  animate: string;
}

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
  options: SimpleOptions;
  data: PanelData;
  onClick: (row: PinRow) => any;
}

export interface MapProps {
  options: SimpleOptions;
  data: PanelData;
}

export interface PinSerieProps extends PinsProps {
  frame: DataFrame;
  animate: boolean;
}
