import React, {useContext, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {StackNavigatorParamsList} from '../../../navigator/ParamsNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {AlbumContext} from '../../../contexts/album-context';
import AlbumsItem from '../../molecules/AlbumItem';
;

export type navigationType = {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Album'>;
};

export const Album: React.FC<navigationType> = ({navigation}) => {

  const {albums,setAlbums,getAlbumsContext} = useContext(AlbumContext);

  useEffect(() => {    
    getAlbumsContext();
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={albums}
          renderItem={({item}) => (
            <AlbumsItem album={item} navigation={navigation} />
          )}
        />
      ) : (
        <ActivityIndicator color="#7a7a7a" />
      )}
    </View>
  );
};

export default Album;