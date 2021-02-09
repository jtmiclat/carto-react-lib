import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Note from './Note';

function LegendIcon({ data = [], info }) {
  return (
    <Grid container direction='column' pb={16} spacing={1}>
      {data.map((d, index) => (
        <Row key={d.label + index} label={d.label} icon={d.icon}></Row>
      ))}
      <Note>{info}</Note>
    </Grid>
  );
}

export default LegendIcon;

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    '&:hover': {
      '& $circle': {}
    }
  },
  icon: {
    width: '16px',
    height: '16px'
  }
}));

function Row({ label, icon }) {
  const classes = useStyles();

  return (
    <Grid container item className={classes.root}>
      <Box mr={1.5}>
        <img src={icon} className={classes.icon} alt={icon} />
      </Box>
      <Typography variant='overline'>{label}</Typography>
    </Grid>
  );
}