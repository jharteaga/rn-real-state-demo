import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconButton({ name }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons name={name} size={30} color="#58585A" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#F3F3F3',
    borderRadius: 15,
    borderWidth: 3,
    height: 55,
    justifyContent: 'center',
    width: 55,
  },
});

export default IconButton;
