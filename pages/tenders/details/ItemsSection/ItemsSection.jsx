/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Label from 'components/Label';

const useStyles = makeStyles(theme => ({
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
  sectionTitle: {
    margin: '32px 0 8px 0',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '28px',
    color: '#263238',
  },

  itemsAvatar: {
    width: 44,
    height: 44,
    background: '#36B0C9',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
  },
  itemsTextContainer: {
    margin: '0 16px',
  },
  itemsLabelBox: {},
  itemsCategoryTitle: {
    marginBottom: 4,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#2D2A26',
  },
  itemsCategoryBox: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  itemsCategoryLabel: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: '18px',
    color: '#90A4AE',
  },
  itemsCategoryValue: {
    margin: '0 8px',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: '18px',
    color: '#2D2A26',

    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  itemsLabel: {
    minWidth: 128,
    background: '#B4BBC8',
    lineHeight: '16px',
    color: '#051E48 !important',
  },
  itemsRefer: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: '18px',
    color: '#2D2A26',
  },
  itemsSpec: {
    fontWeight: 500,
    fontSize: 11,
    lineHeight: '16px',
    textTransform: 'uppercase',
    color: '#90A4AE',
  },
  itemsSpecLabel: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },
  itemsSpecValue: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },
}));

function ItemsSection() {
  const classes = useStyles();
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));

  const LabelComponent = () => (
    <Label color="#B4BBC8" className={classes.itemsLabel}>
      Mandatory to bid
    </Label>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.sectionTitle}>
          Items Required
        </Typography>
      </Grid>

      {[1, 2, 3].map(e => (
        <Grid key={e} item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Box display="flex">
                    <Avatar className={classes.itemsAvatar}>1</Avatar>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      className={classes.itemsTextContainer}
                    >
                      <Typography variant="caption" className={classes.itemsCategoryTitle}>
                        Sun Loungers
                      </Typography>
                      <Box display="flex" className={classes.itemsCategoryBox}>
                        <Typography className={classes.itemsCategoryLabel}>Category</Typography>
                        <Typography className={classes.itemsCategoryValue}>Furniture &gt; Outdoor</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box display="flex" flexDirection="column" alignItems="flex-end" className={classes.itemsLabelBox}>
                    <Typography variant="caption" className={classes.itemsCategoryTitle}>
                      29 pcs
                    </Typography>
                    {!downXs && <LabelComponent />}
                  </Box>
                </Grid>

                {downXs && (
                  <Grid item xs={12}>
                    <LabelComponent />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <Typography className={classes.itemsRefer}>Refer to tender description as provided above.</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.itemsSpec}>Item specifications</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={4} sm={2}>
                      <Typography className={classes.itemsSpecLabel}>Colour</Typography>
                    </Grid>
                    <Grid item xs={8} sm={10}>
                      <Typography className={classes.itemsSpecValue}>Black</Typography>
                    </Grid>

                    <Grid item xs={4} sm={2}>
                      <Typography className={classes.itemsSpecLabel}>Dimension</Typography>
                    </Grid>
                    <Grid item xs={8} sm={10}>
                      <Typography className={classes.itemsSpecValue}>50CM x 50CM x 70CM</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Box textAlign="center">
          <Button color="primary" startIcon={<AddIcon />}>
            See all items
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ItemsSection;
