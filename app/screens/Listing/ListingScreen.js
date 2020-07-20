import React, { useReducer, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import HorizontalFilters from './components/HorizontalFilters';
import houses from '../../assets/data/houses';
import Listing from './components/Listing';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';
import {
  filterHouses,
  getListFilteredByText,
  initFilters,
  isFiltered,
  toggleFilter,
} from '../../config/filters';

const filterReducer = (filters, action) => {
  return toggleFilter(filters, action.type);
};

function ListingScreen({ navigation }) {
  const [housesList, setHouseList] = useState(houses);
  const [housesByCity, setHousesByCity] = useState([]);
  const [housesByFilters, setHousesByFilters] = useState([]);
  const [city, setCity] = useState('');
  const [filters, dispatchFilter] = useReducer(filterReducer, initFilters);

  const handleInputChange = (text) => {
    let list = [];
    setCity(text);

    if (text) {
      list = getListFilteredByText(houses, housesByCity, housesByFilters, text);
      setHousesByCity(list);
    } else {
      if (housesByFilters.length) {
        list = filterHouses(houses, [], filters);
      } else {
        list = [...houses];
      }
      setHousesByCity([]);
    }

    setHouseList(list);
  };

  useEffect(() => {
    if (isFiltered(filters)) {
      const housesFiltered = filterHouses(houses, housesByCity, filters);
      setHousesByFilters(housesFiltered);
      setHouseList(housesFiltered);
    } else {
      setHousesByFilters([]);
      if (housesByCity.length) {
        setHouseList(
          houses.filter((h) =>
            h.city.toUpperCase().startsWith(city.toUpperCase())
          )
        );
      } else {
        setHouseList(houses);
      }
    }
  }, [filters]);

  const handleDrawer = () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <Header style={styles.header} onPress={navigation.openDrawer} />
        <SearchBar style={styles.searchBar} onChange={handleInputChange} />
        <HorizontalFilters filters={filters} onDispatch={dispatchFilter} />
        <Listing houses={housesList} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  searchBar: {
    marginTop: 40,
  },
});

export default ListingScreen;
