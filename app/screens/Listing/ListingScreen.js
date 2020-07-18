import React, { useReducer, useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';

import colors from '../../config/colors';
import FilterButton from '../../components/FilterButton';
import Header from './components/Header';
import houses from '../../assets/data/houses';
import ListItem from './components/ListItem';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';
import { filterHouses, initFilters, toggleFilter } from '../../config/filters';

const filterReducer = (filters, action) => {
  return toggleFilter(filters, action.type);
};

function ListingScreen(props) {
  const [housesList, setHouseList] = useState(houses);
  const [housesByCity, setHousesByCity] = useState([]);
  const [filters, dispatchFilter] = useReducer(filterReducer, initFilters);

  const handleInputChange = (text) => {
    const list = houses.filter((h) =>
      h.city.toUpperCase().startsWith(text.toUpperCase())
    );
    setHouseList(list);
    setHousesByCity(list);
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} style={styles.listItem} />
  );

  useEffect(() => {
    setHouseList(filterHouses(houses, housesByCity, filters));
  }, [filters]);

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
                    onPress={() => dispatchFilter({ type: f.name })}
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
