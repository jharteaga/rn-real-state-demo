import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import filters from '../../assets/data/filters';
import FilterButton from '../../components/FilterButton';
import houses from '../../assets/data/houses';
import Header from './components/Header';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';
import ListItem from './components/ListItem';

function ListingScreen(props) {
  return (
    <Screen>
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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.listing}>
          {houses.map((h) => (
            <ListItem item={h} key={h.id} style={styles.listItem} />
          ))}
        </ScrollView>
      </View>
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
    marginBottom: 30,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  listing: {
    marginTop: 10,
  },
  listItem: {
    marginVertical: 15,
  },
  searchBar: {
    marginTop: 40,
  },
});

export default ListingScreen;
