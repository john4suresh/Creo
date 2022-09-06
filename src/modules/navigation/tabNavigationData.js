import HomeScreen from '../home/HomeView';

const homeIcon = require('./images/home.png');
const activitesIcon = require('./images/activites.png');
const profileIcon = require('./images/profile.png');
const reportIcon = require('./images/reports.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: homeIcon,
  },
  {
    name: 'Activities',
    component: HomeScreen,
    icon: activitesIcon,
  },
  {
    name: 'Reports',
    component: HomeScreen,
    icon: reportIcon,
  },
  {
    name: 'Profile',
    component: HomeScreen,
    icon: profileIcon,
  },
];

export default tabNavigationData;
