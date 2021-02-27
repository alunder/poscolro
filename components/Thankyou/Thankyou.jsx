import nextCookie from 'next-cookies';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { withAuth } from 'lib/auth';
import Home from 'components/Home';

const Thankyou = props => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={6}
      style={{ marginTop: 60, marginBottom: 60 }}
    >
      <Grid item xs={12} md={6}>
        <img src="/images/thankyou.png" width="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" align="center">
          Thank you for registering your interest!
        </Typography>
        <br />
        <br />
        <Typography variant="h6" align="center">
          Our team will be in touch with you over the next couple of days.
        </Typography>
        <Typography variant="h6" align="center">
          In the meantime avail yourself to some of the resources we have on our site (or not!), and our friendly
          account support personnels will guide you through your next steps momentarily.
        </Typography>
        <Typography variant="h6" align="center">
          In the meantime, feel free to browse our resources <a href="https://www.really.sg/blog/">here</a>.
        </Typography>
        <br />
        <br />
        <Typography variant="h6" align="center">
          We would love to connect and engage with you at any one of our channels.
        </Typography>
        <br />
        <br />
        <Typography align="center">
          <a href="https://facebook.com/reallysg" target="_blank">
            <FacebookIcon style={{ color: '#90a4ae', fontSize: 40, marginRight: 10 }} />
          </a>
          <a href="https://www.instagram.com/really_sg/" target="_blank">
            <InstagramIcon style={{ color: '#90a4ae', fontSize: 40, marginRight: 10 }} />
          </a>
          <a href="https://www.linkedin.com/company/reallysg/?originalSubdomain=sg" target="_blank">
            <LinkedInIcon style={{ color: '#90a4ae', fontSize: 40, marginRight: 10 }} />
          </a>
          <a href="https://twitter.com/really_sg" target="_blank">
            <TwitterIcon style={{ color: '#90a4ae', fontSize: 40, marginRight: 10 }} />
          </a>
          <a href="https://www.youtube.com/channel/UCNObHQLGcjJPvcSzqjBbsXw" target="_blank">
            <YouTubeIcon style={{ color: '#90a4ae', fontSize: 40 }} />
          </a>
        </Typography>
        <br />
        <br />
        <Typography variant="h5" align="center" style={{ fontStyle: 'italic' }}>
          Building a better future together.
        </Typography>
        <Typography variant="h5" align="center" style={{ fontStyle: 'italic' }}>
          Project by project, click by click.
        </Typography>
        <br />
        <br />
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={5}>
            <Button variant="contained" size="large" color="primary" fullWidth href="https://www.really.sg/">
              GO BACK TO HOME
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Button variant="outlined" size="large" color="primary" fullWidth href="https://www.really.sg/blog/">
              BROWSE RESOURCES
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Thankyou;
