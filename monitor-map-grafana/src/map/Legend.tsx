import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { first, keys, map, reduce } from 'lodash';
import React, { PureComponent } from 'react';
import ColorService from 'service/ColorService';
import { PinRow, PinsProps } from 'types';
import { dataFrameToJson, getGroups } from './Pins';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // minWidth: 275,
      // width: '100%',
      // position: 'absolute',
      // top: 10,
      // right: 10,
      // zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
      background: 'rgba(255, 255, 255, 0)',
      textShadow: '0 0 3px black',
    },
  })
);

function SimpleCard({ data }: PinsProps) {
  const classes = useStyles();
  const groups = getGroups(reduce(data.series, (prev, curr) => prev.concat(...dataFrameToJson(curr)), [] as PinRow[]));

  return (
    <div className={classes.root}>
      {map(keys(groups), value => {
        return (
          <Chip
            size="small"
            icon={<PersonIcon style={{ color: 'white' }} />}
            label={first(groups[value])?.name}
            style={{ backgroundColor: first(groups[value])?.color || ColorService.getColor(value), color: 'white' }}
          />
        );
      })}
    </div>
  );
}

export default class ControlPanel extends PureComponent<PinsProps> {
  render() {
    return <SimpleCard {...this.props} />;
  }
}
