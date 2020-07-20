import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Constants from 'expo-constants';

import colors from '../../../config/colors';
import IconButton from '../../../components/IconButton';
import routes from '../../../navigation/routes';
import { Image } from 'react-native-expo-image-cache';

function Header({ imageUrl, thumbnailUrl }) {
  const navigation = useContext(NavigationContext);

  const handleBack = () => {
    navigation.navigate(routes.LISTING);
  };
  const handleLike = () => {
    console.log('liked on Detail');
  };

  return (
    <View>
      <Image
        style={styles.image}
        uri={imageUrl}
        preview={{
          uri: thumbnailUrl,
        }}
      />
      <View style={styles.topButtons}>
        <IconButton
          name="arrow-left"
          iconSize={25}
          iconColor={colors.lightGray}
          style={styles.button}
          onPress={handleBack}
        />
        <IconButton
          name="heart-outline"
          iconSize={25}
          iconColor={colors.lightGray}
          style={styles.button}
          onPress={handleLike}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0.8,
    height: 50,
    width: 50,
  },
  image: { height: 310, width: '100%' },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: Constants.statusBarHeight + 10,
    width: '100%',
    opacity: 0.7,
  },
});

export default Header;
