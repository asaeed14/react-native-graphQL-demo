import SearchScreen from 'screens/SearchScreen';

import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
  [routeNames.SEARCH]: {
    ...routeConfigs[routeNames.SEARCH],
    screen: SearchScreen,
  },
};

export default routes;
