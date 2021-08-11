import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {DetailContext} from '../../../contexts/detail-context';
import {StackNavigatorParamsList} from '../../../navigator/ParamsNavigator';
import DetailItem from '../../molecules/DetailItem';

export type navigationType = {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Album'>;
};

export const Detail: React.FC<navigationType> = ({navigation}) => {

  const parameters = navigation.getState().routes;
  var idParameter: any;
  parameters.forEach((data) => {
    idParameter = data.params?.id;
  });

  const {detail, setDetail, getDetailsContext} = useContext(DetailContext);
 
  useEffect(() => {  
    setDetail([]);
    getDetailsContext(idParameter);
  }, []);             

  return (
    <View>
      {detail.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={detail}
          renderItem={({item}) => <DetailItem Details={item} />}
        />
      ) : (
        <ActivityIndicator color="#7a7a7a" />
      )}
    </View>
  );
};

export default Detail;
