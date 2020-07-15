import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';

function ListingScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Header style={styles.header} />
        <SearchBar style={styles.searchBar} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  searchBar: {
    marginTop: 40,
  },
});

export default ListingScreen;
