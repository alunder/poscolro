import React from 'react';
import { Card, CardContent, GridList, GridListTile } from '@material-ui/core';
import clsx from 'clsx';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';

import useStyles from '../styles';

const tileData = [
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
];

const UploadFile = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={clsx(classes.cardPadding, classes.gridListContainer)}>
        <GridList className={classes.gridList} cols={5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} style={{ marginRight: '24px', width: '150px', height: '150px' }}>
              <img src={tile.img} alt="" />
            </GridListTile>
          ))}
        </GridList>
      </CardContent>
    </Card>
  );
};

UploadFile.propTypes = {};

UploadFile.defaultProps = {};

export default UploadFile;
