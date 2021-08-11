import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Album} from '../../components/screens/Album';
import {Detail} from '../../components/screens/Detail';
import {User} from '../../components/screens/User';


const HomeStack = createStackNavigator();

const HomeNavigator: React.FC = () => {
  const {Navigator, Screen} = HomeStack;

  return (
    <Navigator>
      <Screen
        options={{
          headerShown: true,
          title : "My Music Albums",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Albums"
        component={Album}
      />
      <Screen       
      options={{
        headerShown: true,
        title : "Album Songs",
        headerStyle: {
          backgroundColor: '#F2D65C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="Detail" 
      component={Detail} 
      />
      <Screen       
      options={{
        headerShown: true,
        title : "Users",
        headerStyle: {
          backgroundColor: '#F2D65C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="User" 
      component={User} 
      />
    </Navigator>
  );
};

export default HomeNavigator;
