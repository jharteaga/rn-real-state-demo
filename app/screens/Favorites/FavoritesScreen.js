import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Screen from '../../components/Screen';

function FavoritesScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>Favorites</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});

export default FavoritesScreen;
