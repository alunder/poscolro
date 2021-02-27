import Main from 'components/Layout/Main';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Divider, Grid } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DashboardHeader from 'components/DashboardHeader';
import Container from '@material-ui/core/Container';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import PieChartComponent from 'components/DashboardChart/pieChart';
import MapComponent from 'components/DashboardChart/map';
import BarChartComponent from 'components/DashboardChart/barChart';
import LineChartComponent from 'components/DashboardChart/lineChart';
import DashboardDetailCard from 'components/DashboardDetailCard';
import Page from 'components/Page';
import TimelineChart from 'components/DashboardTimelineChart/App';
// import { detailData, pieChartData, colorsFilled, barChartData, lineDetailData } from './StacticData';
// import ProjectCreate from './_ProjectCreate';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  headerusername: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.56,
  },
}));

const Dashboard = ({ currentUser, project_status }) => {
  return (
    <Main
      isShowSignOut={true}
      currentUser={currentUser}
      alertMessage={
        !currentUser.confirmed && (
          <span>
            <strong>
              <ErrorOutlineIcon fontSize="small" style={{ verticalAlign: 'middle' }} /> Verify your email address.
            </strong>
            {'  '}
            Please click on the verification link that has been sent to your email account.
          </span>
        )
      }
    >
      <Page title="Dashboard">
        <Container>
          <DashboardHeader
            title="Management"
            subtitle="Dashboard"
            name={'Good Morning, Jacky'}
            headerusername={useStyles.headerusername}
          />
          <DashboardDetailCard detailData={detailData} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <PieChartComponent pieChartData={pieChartData} colorsFilled={colorsFilled} />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <BarChartComponent barChartData={barChartData} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <LineChartComponent barData={lineDetailData} lineDetailData={lineDetailData} />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <TimelineChart />
            </Grid>
          </Grid>
          <MapComponent />
        </Container>
      </Page>
    </Main>
  );
};

const detailData = [
  {
    title: 'NO OF TENDER PACKAGES',
    count: 368,
    icon: <BusinessCenterOutlinedIcon style={{ color: 'white' }} />,
    active: false,
  },
  {
    title: 'NO OF PROJECTS',
    count: 18,
    icon: <BarChartOutlinedIcon style={{ color: 'white' }} />,
    active: false,
  },
  {
    title: 'FORCASTED BUDGET',
    count: 'SGD 530,000',
    icon: <AttachMoneyOutlinedIcon style={{ color: 'white' }} />,
    active: false,
  },
  {
    title: 'COMMITTED BUDGET',
    count: 'SGD 432,000',
    icon: <AttachMoneyOutlinedIcon style={{ color: 'black' }} />,
    active: true,
  },
];
const colorsFilled = ['#ffd040', '#d41367', '#36b0c9'];
const pieChartData = [
  { name: 'Group A', value: 400, subtitle: 'OPEN TENDERS', percentage: '22%' },
  { name: 'Group B', value: 300, subtitle: 'PENDING AWARD TENDERS', percentage: '18%' },
  { name: 'Group C', value: 1000, subtitle: ' AWARD TENDERS', percentage: '60%' },
];
const barChartData = [
  {
    date: '#0129',
    uv: 40,
    pv: 24,
    amt: 24,
    cv: 35,
  },
  {
    date: '#0132',
    uv: 30,
    pv: 13,
    amt: 22,
    cv: 45,
  },
  {
    date: '#0168',
    uv: 20,
    pv: 17,
    amt: 22,
    cv: 23,
  },
  {
    date: '#0282',
    uv: 27,
    pv: 39,
    amt: 20,
    cv: 12,
  },
  {
    date: '#0328',
    uv: 18,
    pv: 16,
    amt: 21,
    cv: 43,
  },
];

const lineDetailData = [
  {
    projectNo: '#023',
    projectCount: 54,
  },
  {
    projectNo: '#064',
    projectCount: 31,
  },
  {
    projectNo: '#75',
    projectCount: 15,
  },
  {
    projectNo: '#96',
    projectCount: 8,
  },
];
export default Dashboard;
