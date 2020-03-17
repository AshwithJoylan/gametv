import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomRoot} from '../utils';

// Import Screens
import Main from './main';
import {Details} from '../screens';
// Extracting Stack Components
const {Screen, Navigator} = createStackNavigator();

// Screens
interface ScreenProp {
  component: React.FC;
  name: string;
}
const screens: ScreenProp[] = [
  {
    component: Main,
    name: 'Main',
  },
  {
    component: Details,
    name: 'Details',
  },
];

// Component
export default () => {
  return (
    <CustomRoot>
      <NavigationContainer>
        <Navigator headerMode="none">
          {screens.map(({component, name}, key) => (
            <Screen {...{name, component, key}} />
          ))}
        </Navigator>
      </NavigationContainer>
    </CustomRoot>
  );
};
