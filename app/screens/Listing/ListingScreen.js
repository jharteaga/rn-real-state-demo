import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import filters from '../../assets/data/filters';
import FilterButton from '../../components/FilterButton';
import Header from './components/Header';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';

function ListingScreen(props) {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <Header style={styles.header} />
          <SearchBar style={styles.searchBar} />
          <ScrollView
            horizontal={true}
            style={styles.filters}
            showsHorizontalScrollIndicator={false}
          >
            {filters.map((f) => (
              <FilterButton
                key={f.id}
                style={styles.filterButton}
                title={f.label}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  filters: {
    marginTop: 25,
  },
  filterButton: {
    marginRight: 10,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  searchBar: {
    marginTop: 40,
  },
});

export default ListingScreen;
