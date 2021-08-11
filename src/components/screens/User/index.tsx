import React, {useContext, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {StackNavigatorParamsList} from '../../../navigator/ParamsNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserContext} from '../../../contexts/user-context';
import UserItem from '../../molecules/UserItem';



export type navigationType = {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'User'>;
};

export const User: React.FC<navigationType> = ({navigation}) => {
  
  const {user,setUser,getUserContext} = useContext(UserContext);

  useEffect(() => {  
    setUser([]);
    getUserContext();
  }, []);
  
  return (    
    <View>
      {user.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={user}
          renderItem={({item}) => (
            <UserItem user={item} navigation={navigation} />
          )}
          />          
      ) : (
        <ActivityIndicator color="#7a7a7a" />
      )}
    </View>    
  );
};

export default User;