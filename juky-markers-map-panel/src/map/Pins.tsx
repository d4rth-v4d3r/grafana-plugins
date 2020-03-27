import { DataFrame } from '@grafana/data';
import Chip from '@material-ui/core/Chip';
import { first, fromPairs, groupBy, keys, map, sortBy } from 'lodash';
import React, { PureComponent } from 'react';
import { Marker } from 'react-map-gl';
import ColorService from 'service/ColorService';
import { PinRow, PinSerieProps, PinsProps } from 'types';
import './Pin.css';

const dataFrameToJson = (frame: DataFrame): PinRow[] => {
  const source = fromPairs(map(frame.fields, field => [field.name, field.values.toArray()]));

  return map(first(frame.fields)?.values as any, (_v, index: number) =>
    fromPairs(map(frame.fields, field => [field.name, source[field.name][index]]))
  ) as any;
};

class PinSerie extends PureComponent<PinSerieProps> {
  render() {
    const { frame, onClick } = this.props;

    const source = dataFrameToJson(frame);

    const groups = groupBy(source, s => s.key);

    return map(keys(groups), key =>
      sortBy(groups[key], pin => pin.time).map((pin, index) => {
        const last = index === groups[key].length - 1;

        return (
          <Marker key={`marker-${index}`} longitude={pin.longitude} latitude={pin.latitude}>
            <div className="container1005" onClick={() => onClick(pin)}>
              <i className={`${pin.icon} pin1000 ${last ? 'pinActive1001' : ''}`} style={{ color: pin.color || ColorService.getColor(pin.key) }}></i>
            </div>
            {last && (
              <div className="containerWrap1005">
                <Chip label={pin.name} />
              </div>
            )}
          </Marker>
        );
      })
    );
  }
}

export default class Pins extends PureComponent<PinsProps> {
  render() {
    const { data } = this.props;

    return data.series.map((dataFrame, index) => <PinSerie key={`df-${index}`} {...this.props} frame={dataFrame} />);
  }
}
