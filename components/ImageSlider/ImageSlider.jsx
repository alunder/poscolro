import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/styles';
import 'react-image-gallery/styles/css/image-gallery.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    padding: theme.spacing(3),
    backgroundColor: 'white',
    boxShadow: `0px 1px 3px rgba(63, 63, 68, 0.15), 0px 0px 0px rgba(63, 63, 68, 0.05)`,
    borderRadius: '4px',
  },
  '@global .image-gallery-content.fullscreen .image-gallery-slide .image-gallery-image': {
    height: '100vh',
  },
  '@global .image-gallery-slide .image-gallery-image': {
    height: '460px',
  },
  '@global .image-gallery-slide img': {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    border: '1px solid #E6E6E6',
  },
  '@global .image-gallery-thumbnails-container .image-gallery-thumbnail-inner': {
    marginBottom: '4px',
    height: '92px',
  },
  '@global .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails': {
    left: 12,
  },
  '@global .image-gallery-thumbnail': {
    border: `2px solid transparent`,
  },
  '@global .image-gallery-thumbnail img': {
    borderRadius: '4px',
    objectFit: 'contain',
    maxWidth: '88px',
    height: '88px',
    border: '1px solid #E6E6E6',
  },
  '@global .image-gallery-thumbnail.active img': {
    borderRadius: '4px',
    border: `2px solid ${theme.palette.primary.main}`,
  },
  '@global .image-gallery-thumbnail.active': {
    border: `2px solid transparent`,
  },
}));

const ProductImages = props => {
  const { images } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageGallery
        items={images}
        showFullscreenButton
        showNav={false}
        showPlayButton={false}
        thumbnailPosition="right"
      />
    </div>
  );
};

ProductImages.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array,
};

export default ProductImages;
