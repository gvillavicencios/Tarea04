import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import IDetail from '../../../Models/IDetail';

export interface DetailsProps {
  Details: IDetail;
}

const DetailItem: React.FC<DetailsProps> = ({Details}) => {
  return (
     <Card>
        <Card.Title> { Details.id } {Details.title} </Card.Title>
        <Card.Divider/>
          <Card.Image source={{uri: Details.url}}>                  
          </Card.Image>
      </Card>             
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 20,
    paddingRight: 60,
  },
  image: {
    marginRight: 10,
  },
  arrow: {
    width: 30,
    height: 30,
  },
});


export default DetailItem;