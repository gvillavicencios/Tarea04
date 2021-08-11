import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import HomeNavigator from '../MainScreen';
import UserItem from '../../components/molecules/UserItem';
import User from '../../components/screens/User';

const tab = createBottomTabNavigator();

const bottomMain: React.FC = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <tab.Screen
        name="Main"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../assets/main.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            </View>
          ),
          title: 'My Albums',
        }}
      />
      <tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../assets/user.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            </View>
          ),
        }}
      />       
    </tab.Navigator>
  );
};

export default bottomMain;
