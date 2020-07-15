import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../../components/Screen';
import Header from './components/Header';

function ListingScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Header style={styles.header} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 20,
  },
});

export default ListingScreen;
