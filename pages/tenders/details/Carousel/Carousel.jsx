/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import Head from 'next/head';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const MIN_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';
const THEME_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css';

const useStyles = makeStyles(() => ({
  root: {
    '& .slick-slider': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .arrow': {
      cursor: 'pointer',
      width: 20,
      height: 20,
      color: '#484542',
    },
  },

  img: {
    margin: 'auto',
    borderRadius: 4,
    minWidth: 150,
    minHeight: 150,
    background: 'gainsboro',
  },
}));

function Carousel(props) {
  const { items = [] } = props;
  const classes = useStyles();
  const [settings] = useState({
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  });

  return (
    <div className={classes.root}>
      <Head>
        <link rel="stylesheet" href={MIN_CSS} />
        <link rel="stylesheet" href={THEME_CSS} />
      </Head>
      <Slider {...settings}>
        {items.map(e => (
          <div key={e}>
            <img alt="carousel item" src={`https://picsum.photos/150?r=${e}`} className={classes.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;

function PrevArrow(props) {
  const { onClick } = props;
  return <ArrowBackIosIcon className="arrow arrow-prev" onClick={onClick} />;
}

function NextArrow(props) {
  const { onClick } = props;
  return <ArrowForwardIosIcon className="arrow arrow-next" onClick={onClick} />;
}
