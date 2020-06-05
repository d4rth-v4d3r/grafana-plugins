import { dateTime } from '@grafana/data';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { join } from 'lodash';
import React from 'react';
import ColorService from 'service/ColorService';
import { PinRow } from 'types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 150,
      width: '100%',
    },
  })
);

export default function PinInfo({ image, legend, name, time, keyHack, color }: PinRow & { keyHack: string }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: color || ColorService.getColor(keyHack) }}>
            {join(
              name?.split(' ').map(v => v.toUpperCase().charAt(0)),
              ''
            )}
          </Avatar>
        }
        title={legend}
        subheader={dateTime(time).fromNow()}
      />
      {image && <img className={classes.media} src={image} alt={legend} />}
    </Card>
  );
}
