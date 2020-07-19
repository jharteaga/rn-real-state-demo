import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

import colors from '../config/colors';

function SearchBar({ style, onChange }) {
  /**
   * State to handle the label effect
   */
  const [input, setInput] = useState('');

  const handleChange = (text) => {
    setInput(text);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={input === '' ? styles.placeholder : styles.label}>
        Canada City
      </Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => {
            handleChange(text);
            onChange(text);
          }}
        >
          {input}
        </TextInput>
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
  searchBar: {
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
