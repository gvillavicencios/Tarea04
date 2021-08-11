import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootNavigatorParamsList, StackNavigatorParamsList} from './ParamsNavigator';
import bottomMain from './bottomMain';

const MainStack = createStackNavigator<StackNavigatorParamsList>();
const RootStack = createStackNavigator<RootNavigatorParamsList>();
const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>      
        <MainStack.Screen name="TabBottom" component={bottomMain} />
    </MainStack.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  const {Navigator, Screen} = RootStack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Main" component={MainNavigator} />
    </Navigator>
  );
};

export default RootNavigator;
