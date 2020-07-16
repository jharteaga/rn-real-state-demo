import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';

function FilterButton({ title, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.mediumGray,
    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    width: 110,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default FilterButton;
