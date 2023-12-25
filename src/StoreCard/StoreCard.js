import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({storeData}) => {
  console.log(storeData);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: storeData.imgURL}} />
      <Text style={styles.title}>{storeData.title}</Text>
      <Text style={styles.price}>{storeData.price}</Text>
      {storeData.inStock != true ? (
        <Text style={styles.inStock}>Stokta Yok</Text>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default StoreCard;
