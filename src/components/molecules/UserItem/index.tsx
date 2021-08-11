import React from 'react';
import {TouchableOpacity, StyleSheet,Text} from 'react-native';
import {Card} from 'react-native-elements'
import IUser from '../../../Models/IUser';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../../navigator/ParamsNavigator';

export interface UserProps {
  user: IUser;
  navigation: StackNavigationProp<StackNavigatorParamsList, 'User'>;
}

const UserItem: React.FC<UserProps> = ({user,navigation}) => 
{
  
  const styles = StyleSheet.create({
    title: {
      padding: 20,
      paddingRight: 60,
    },
    image: {
      marginRight: 6,
    },
    arrow: {
      width: 12,
      height: 12,
    },
  });
  
  return (      
    <TouchableOpacity>
        <Card>
          <Card.Title>User:  {user.username} </Card.Title>
          <Card.Divider/>
            <Text>Name:  {user.name}</Text>          
            <Card.Divider/>
            <Text>Email:  {user.email}</Text>                         
            <Card.Divider/>
            <Text>WebSite:  {user.website}</Text>                         
          </Card>     
    </TouchableOpacity>
  );
};
export default UserItem;