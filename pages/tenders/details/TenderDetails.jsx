/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Container, Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Main from 'components/Layout/Main';
import Page from 'components/Page';
import Snackbar from 'components/Snackbar';
import QnA from './QnA';
import StickyStepper from './StickyStepper';
import Carousel from './Carousel';
import HeroSection from './HeroSection';
import DetailsSection from './DetailsSection';
import TermsSection from './TermsSection';
import SiteVisitSection from './SiteVisitSection';
import SupportingSection from './SupportingSection';
import ItemsSection from './ItemsSection';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
  },

  card: {
    '& .MuiCardContent-root': {
      padding: '24px 28px',
    },
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#2D2A26',
  },

  tenderTitle: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '28px',
    color: '#263238',
  },
  flexItemAlignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  bidSubmittedGridItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  bidSubmittedIcon: {
    marginRight: 8,
    fontSize: 24,
    color: '#4CAF50',
  },
  bidSubmitted: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 0.2,
    color: '#4CAF50',
    textTransform: 'uppercase',
  },

  snackbar: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    color: '#FFFFFF',
    flexWrap: 'nowrap',

    '& .MuiSnackbarContent-action': {
      paddingLeft: 0,
    },

    [theme.breakpoints.down('xs')]: {
      '& .MuiSnackbarContent-action': {
        paddingTop: 8,

        '& button': {
          padding: '0 12px',
        },
      },
    },

    '&.error': {
      background: '#EB5757',
    },
    '&.success': {
      background: '#4CAF50',
    },
  },
  sectionTitle: {
    margin: '32px 0 8px 0',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '28px',
    color: '#263238',
  },

  stickyGridItem: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const TenderDetails = ({ currentUser }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [currentId, setCurrentId] = useState('tenderDetails');
  const [notification, setNotification] = useState('error');
  const messageMapping = {
    error: `The Tender owner has requested an amendment to your bid. Please click 'View Bid' above to edit your bid before 12 Dec 2019.`,
    success: 'Congrats! You’ve been awarded this tender. Please contact the tender owner to discuss the next steps!',
  };
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const currentId = Ids[currentIndex] ? Ids[currentIndex].id : Ids[Ids.length - 1].id;

  // useScrollPosition(
  //   ({ currPos }) => {
  //     const scrollY = currPos.y;
  //     const nextIndex = Ids[currentIndex + 1] ? currentIndex + 1 : currentIndex;
  //     const nextId = Ids[nextIndex].id;
  //     const element = document.getElementById(nextId);

  //     if (!element || !scrollY) return;

  //     const position = element.offsetTop;

  //     if (position + scrollY < 0) {
  //       setCurrentIndex(nextIndex);
  //     }
  //   },
  //   [currentIndex],
  // );

  return (
    <Main isShowSignOut currentUser={currentUser}>
      <Page title="Dashboard">
        <Container className={classes.root}>
          <HeroSection />

          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5} lg={6} className={classes.flexItemAlignCenter}>
                <Typography variant="h3" className={classes.tenderTitle}>
                  Tender Details
                </Typography>
              </Grid>

              <Grid item xs={12} sm={7} lg={6} className={classes.flexItemAlignCenter}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={9}
                    className={(classes.flexItemAlignCenter, classes.bidSubmittedGridItem)}
                  >
                    <div className={clsx(classes.flexItemAlignCenter)}>
                      <CheckCircleOutlineIcon className={classes.bidSubmittedIcon} />
                      <Typography variant="body1" className={classes.bidSubmitted}>
                        Bid Submitted on 8 Nov 2019
                      </Typography>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    className={clsx(classes.flexItemAlignCenter, classes.viewBidButtonGridItem)}
                  >
                    <Button fullWidth variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />}>
                      View Bid
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Snackbar
                  variant={notification}
                  className={clsx(classes.snackbar, notification)}
                  message={messageMapping[notification]}
                  open={notification}
                  onClose={handleChangeNotification}
                />
              </Grid>

              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <DetailsSection />
                  </Grid>

                  <Grid item xs={12}>
                    <TermsSection />
                  </Grid>

                  <Grid id="siteVisitDetails" item xs={12}>
                    <SiteVisitSection />
                  </Grid>

                  <Grid id="photos" item xs={12}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8]} />
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid id="supportingDocuments" item xs={12}>
                    <SupportingSection />
                  </Grid>

                  <Grid id="itemsRequired" item xs={12}>
                    <ItemsSection />
                  </Grid>

                  <Grid id="qna" item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h3" className={classes.sectionTitle}>
                          Question and Answer
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <QnA />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {mdUp && (
                <Grid item md={3}>
                  <StickyStepper currentId={currentId} onClick={handleScrollToId} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Container>
      </Page>
    </Main>
  );

  function handleChangeNotification() {
    let newNotification = null;

    if (notification === 'error') {
      newNotification = 'success';
    }

    setNotification(newNotification);
  }

  function handleScrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      const yOffset = -60;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setCurrentId(id);
    });
  }
};

export default TenderDetails;
