import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function IconButton({
  name,
  iconSize = 30,
  iconColor = colors.secondary,
  style,
  onPress,
}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <MaterialCommunityIcons name={name} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.lightGray,
    borderRadius: 15,
    borderWidth: 2,
    height: 55,
    justifyContent: 'center',
    width: 55,
  },
});

export default IconButton;
