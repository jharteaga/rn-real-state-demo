import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ActionButton({ title, icon, style }) {
  return (
    <TouchableOpacity>
      <View style={[styles.container, style]}>
        {icon && <MaterialCommunityIcons name={icon} color="white" size={22} />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 75,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    width: 150,
  },
  text: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ActionButton;
