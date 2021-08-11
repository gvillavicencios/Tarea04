import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from '../../navigator/MainNavigator';
const Stack = createStackNavigator();

const StartScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default StartScreen;
