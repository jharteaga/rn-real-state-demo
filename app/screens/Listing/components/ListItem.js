import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import colors from '../../../config/colors';
import IconButton from '../../../components/IconButton';

function ListItem(props) {
  return (
    <View style={styles.container}>
      <IconButton iconSize={28} name="heart-outline" style={styles.like} />
      <Image
        preview={{
          uri:
            'https://res.cloudinary.com/di5y8jhl0/image/upload/c_thumb,w_100/v1594794357/rn-real-state/home11_dw1ard.jpg',
        }}
        style={styles.image}
        tint="light"
        uri={
          'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794357/rn-real-state/home11_dw1ard.jpg'
        }
      />
      <View style={styles.row}>
        <Text style={styles.price}>$200,000</Text>
        <Text style={styles.address}>1225 Robson St, 94080, SF</Text>
      </View>
      <Text style={styles.description}>
        4 bedrooms / 2 bathrooms / 1,416 sqft
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    alignSelf: 'center',
    color: colors.gray,
    fontSize: 13,
    fontWeight: 'bold',
  },
  container: { marginTop: 30 },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },
  image: {
    borderRadius: 25,
    height: 180,
    width: '100%',
    position: 'relative',
    zIndex: -1,
  },
  like: {
    borderWidth: 0,
    position: 'absolute',
    right: 15,
    top: 15,
    width: 43,
    height: 43,
    zIndex: 3,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 8,
    marginLeft: 5,
    alignSelf: 'baseline',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default ListItem;
