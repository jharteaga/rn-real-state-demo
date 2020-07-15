import React from 'react';
import { StyleSheet, View } from 'react-native';

import IconButton from '../../../components/IconButton';

function Header({ style }) {
  return (
    <View style={[styles.container, style]}>
      <IconButton name="menu" />
      <IconButton name="magnify" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
