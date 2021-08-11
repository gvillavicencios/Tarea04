import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements'
import IAlbum from '../../../Models/IAlbum';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../../navigator/ParamsNavigator';

export interface AlbumsProps {
  album: IAlbum;
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Album'>;
}

const AlbumsItem: React.FC<AlbumsProps> = ({album, navigation}) => {
  
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
    <TouchableOpacity  onPress={() => navigation.navigate('Detail',{id: album.id})}>
        <Card>
          <Card.Title> {album.title} </Card.Title>
          <Card.Divider/>
          <Card.Image source={{ uri: album.details != null? album.details[0].thumbnailUrl : "" }}>           
          </Card.Image>
          </Card>     
    </TouchableOpacity>
  );
};

export default AlbumsItem;



