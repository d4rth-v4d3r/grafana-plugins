import { DataFrame } from '@grafana/data';
import { first, fromPairs, groupBy, keys, map, sortBy } from 'lodash';
import React, { PureComponent } from 'react';
import { Marker } from 'react-map-gl';
import ColorService from 'service/ColorService';
import { PinRow, PinSerieProps, PinsProps } from 'types';
import '../assets/css/marker-icons.css';
import './Pin.css';

export const dataFrameToJson = (frame: DataFrame): PinRow[] => {
  const source = fromPairs(map(frame.fields, field => [field.name, field.values.toArray()]));

  return map(first(frame.fields)?.values as any, (_v, index: number) =>
    fromPairs(map(frame.fields, field => [field.name, source[field.name][index]]))
  ) as any;
};

export const getGroups = (data: PinRow[]) => groupBy(data, d => d.key);

class PinSerie extends PureComponent<PinSerieProps> {
  render() {
    const { frame, onClick } = this.props;

    const source = dataFrameToJson(frame);

    const groups = getGroups(source);

    return map(keys(groups), key =>
      sortBy(groups[key], pin => pin.time).map((pin, index) => {
        const last = index === groups[key].length - 1;

        return (
          <Marker key={`marker-${index}`} longitude={pin.longitude} latitude={pin.latitude}>
            <div className="juky-marker-icons">
              <div className=" container" onClick={() => onClick(pin)}>
                <i
                  className={`${pin.icon} pin ${this.props.animate && last ? 'pinActive' : ''}`}
                  style={{ color: pin.color || ColorService.getColor(pin.key) }}
                ></i>
              </div>
              {/* {last && (
                <div className="containerWrap">
                  <Chip label={pin.name} />
                </div>
              )} */}
            </div>
          </Marker>
        );
      })
    );
  }
}

export default class Pins extends PureComponent<PinsProps> {
  render() {
    const { data } = this.props;
    console.log(data);

    return data.series.map((dataFrame, index) => (
      <PinSerie
        key={`df-${index}`}
        animate={this.props.options.animate === dataFrame.refId}
        {...this.props}
        frame={dataFrame}
      />
    ));
  }
}
