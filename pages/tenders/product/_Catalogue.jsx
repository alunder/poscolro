import React from 'react';
import uuid from 'uuid/v1';
import Main from 'components/Layout/Main';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import Page from 'components/Page';
import PropTypes from 'prop-types';

import ImageSlider from 'components/ImageSlider';
import CatalogueHeader from 'components/CatalogueHeader';
import ProductDescription from './_ProductDescription';
import ProductDetail from './_ProductDetail';

const useStyles = makeStyles(theme => ({
  heading: {
    color: '#36b0c9',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.2px',
    lineHeight: 1.71,
  },
  header: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  svgIcon: {
    verticalAlign: 'middle !important',
  },
  root: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  title: {
    fontWeight: 500,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  cardWrapper: {
    display: 'flex',
  },
}));

const Catalogue = ({ currentUser }) => {
  const classes = useStyles();

  const product = {
    id: uuid(),
    title: 'Couchy',
    company: {
      name: 'ABC Company',
      isVerified: true,
      labels: ['Furniture & Fixtures', 'Carpentry Service'],
    },
    productId: '#001123',
    details: {
      category: 'Sofa',
      brand: 'IKEA',
      unit: 'Piece',
      'product SKU': '2318JUS9',
    },
    description: `
      <H4>The Best Sofa in Singapore</H4>
      <p>
        Built on a solid wooden frame with S-spring and high density foam support, 
        the Ashley L-Shaped Sofa is a classic sofa re-imagined for modern day living. 
        Upholstered in 100% polyester, the fabric is soft to the touch and cooling to the skin.
        Its super-deep seats and soft pillowed high backrest allows you and your loved ones
         to lounge on it indefinitely.
      </p>
      <p>&nbsp;</p>
      <p>
        Available in L-shaped - Right or Left Facing Chaise Lounge and 3 seater versions, 
        the Ashley Sofa comes in 2 colours - Granite and Stone.
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          This is a sectional sofa consisting of individual units held together firmly
          by retractable plastic clips at the bottom of sofa units.
        </li>
        <li>
          Seating firmness: 3/5 Medium\
        </li>
        <li>
          Seat cushions and throw cushion covers are removable
        </li>
        <li>
          Comes with 4 additional throw cushions
        </li>
        <li>
          Free assembly inclusive
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        Choose from Right or Left Chaise:
      </p>
      <ul>
        <li>
          Right facing chaise lounge: When facing the sofa, the chaise lounge is on the right
        </li>
        <li>
          Left facing chaise lounge: When facing the sofa, the chaise lounge is on the left.
        </li>
      <ul>  
      `,
    images: [
      {
        original:
          'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        thumbnail:
          'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      },
      {
        original: 'https://upload.wikimedia.org/wikipedia/commons/9/91/F-15_vertical_deploy.jpg',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/91/F-15_vertical_deploy.jpg',
      },
      {
        original:
          'https://images.unsplash.com/photo-1547166812-0fca6370dc03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        thumbnail:
          'https://images.unsplash.com/photo-1547166812-0fca6370dc03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      },
      {
        original:
          'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80',
        thumbnail:
          'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1990&q=80',
      },
    ],
  };

  return (
    <Main isShowSignOut currentUser={currentUser}>
      <Page title="Catalogue">
        <Container maxWidth="lg">
          <div className={classes.root}>
            <CatalogueHeader className={classes.header} />
            <div className={classes.content}>
              <div className={classes.productRow}>
                <Grid container spacing={3}>
                  <Grid item lg={8} md={12} xl={8} xs={12}>
                    <ImageSlider images={product.images} />
                  </Grid>
                  <Grid item lg={4} md={12} xl={4} xs={12} className={classes.cardWrapper}>
                    <ProductDetail
                      company={product.company}
                      details={product.details}
                      productId={product.productId}
                      title={product.title}
                    />
                  </Grid>
                </Grid>
              </div>
              <Typography className={classes.title} variant="h3">
                Item Description
              </Typography>
              <ProductDescription description={product.description} />
            </div>
          </div>
        </Container>
      </Page>
    </Main>
  );
};

Catalogue.propTypes = {
  currentUser: PropTypes.object,
};

export default Catalogue;
