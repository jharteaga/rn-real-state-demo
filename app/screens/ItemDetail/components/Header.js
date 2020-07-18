import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import IconButton from '../../../components/IconButton';
import colors from '../../../config/colors';

function Header(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://res.cloudinary.com/di5y8jhl0/image/upload/v1594794354/rn-real-state/home1_xhrdcb.jpg',
        }}
      />
      <View style={styles.topButtons}>
        <IconButton
          name="arrow-left"
          iconSize={25}
          iconColor={colors.lightGray}
          style={styles.button}
        />
        <IconButton
          name="heart-outline"
          iconSize={25}
          iconColor={colors.lightGray}
          style={styles.button}
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
