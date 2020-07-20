import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { NavigationContext } from '@react-navigation/native';

import colors from '../../../config/colors';
import IconButton from '../../../components/IconButton';
import routes from '../../../navigation/routes';

function ListItem({ item, style }) {
  const [liked, setLiked] = useState(false);
  const navigation = useContext(NavigationContext);

  const handlePress = () => {
    navigation.navigate(routes.DETAIL_ITEM, { item: item });
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity style={style} onPress={handlePress}>
      <IconButton
        iconSize={28}
        name={liked ? 'heart' : 'heart-outline'}
        style={styles.like}
        onPress={handleLike}
        iconColor={liked ? colors.heart : colors.gray}
      />
      <Image
        preview={{
          uri: item.thumbnailUrl,
        }}
        style={styles.image}
        tint="light"
        uri={item.imageUrl}
      />
      <View style={styles.row}>
        <Text style={styles.price}>
          ${item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <Text style={styles.description}>
        {item.bedrooms} bedrooms / {item.bathrooms} bathrooms /{' '}
        {item.squareFeet} sqft
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  address: {
    alignSelf: 'center',
    color: colors.gray,
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },
  image: {
    borderRadius: 25,
    height: 200,
    position: 'relative',
    width: '100%',
    zIndex: -1,
  },
  like: {
    borderWidth: 0,
    height: 43,
    position: 'absolute',
    right: 15,
    top: 15,
    width: 43,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 8,
    alignSelf: 'baseline',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default ListItem;
