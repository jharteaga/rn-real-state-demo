import React, { useReducer, useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';

import FilterButton from '../../components/FilterButton';
import houses from '../../assets/data/houses';
import Header from './components/Header';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';
import ListItem from './components/ListItem';
import colors from '../../config/colors';
import { filterHouses, initFilters, toggleFilter } from '../../config/filters';

const filterReducer = (filters, action) => {
  return toggleFilter(filters, action.type);
};

const houseReducer = (housesList, action) => {
  return filterHouses(houses, action.payload);
};

function ListingScreen(props) {
  const [housesList, dispatchHouses] = useReducer(houseReducer, houses);
  const [filters, dispatchFilter] = useReducer(filterReducer, initFilters);

  const handleInputChange = (text) => {
    setHousesList(
      houses.filter((h) => h.city.toUpperCase().startsWith(text.toUpperCase()))
    );
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} style={styles.listItem} />
  );

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Header style={styles.header} />
        <SearchBar style={styles.searchBar} onChange={handleInputChange} />
        <View style={styles.filters}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filters.map(
              (f) =>
                f.visible && (
                  <FilterButton
                    key={f.id}
                    onPress={() => {
                      dispatchFilter({ type: f.name });
                      dispatchHouses({
                        type: f.name,
                        payload: filters,
                      });
                    }}
                    style={
                      filters[f.id].active
                        ? styles.filterButtonActive
                        : styles.filterButton
                    }
                    title={f.label}
                  />
                )
            )}
          </ScrollView>
        </View>
        <View style={styles.listing}>
          {housesList.length ? (
            <FlatList
              data={housesList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text style={styles.text}>No Results</Text>
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  filters: {
    marginTop: 15,
    marginBottom: 10,
  },
  filterButton: {
    marginRight: 10,
  },
  filterButtonActive: {
    marginRight: 10,
    backgroundColor: colors.filterSelected,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  listing: {
    flex: 1,
    marginTop: 5,
  },
  listItem: {
    marginBottom: 20,
  },
  searchBar: {
    marginTop: 40,
  },
  text: {
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
});

export default ListingScreen;
