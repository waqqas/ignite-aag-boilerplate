import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';

import SplashScreen from '../Containers/SplashScreen';

const
  AppNav = StackNavigator({
    SplashScreen: {screen: SplashScreen},
  }, {
    initialRoute: 'SplashScreen',
    headerMode: 'none'
  });

export default AppNav;
