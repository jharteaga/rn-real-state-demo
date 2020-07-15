import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function SearchBar({ style }) {
  const [city, setCity] = useState('');

  const handleChange = (text) => {
    setCity(text);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={city === '' ? styles.placeholder : styles.label}>City</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => handleChange(text)}
        >
          {city}
        </TextInput>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="tune"
            color={colors.secondary}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderColor: colors.lightGray,
    paddingBottom: 10,
    width: '100%',
  },
  label: {
    color: colors.placeholder,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    position: 'absolute',
    top: -18,
  },
  placeholder: {
    color: colors.placeholder,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
    position: 'absolute',
    top: 0,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default SearchBar;
