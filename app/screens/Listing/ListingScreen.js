import React, { useReducer } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import FilterButton from '../../components/FilterButton';
import houses from '../../assets/data/houses';
import Header from './components/Header';
import Screen from '../../components/Screen';
import SearchBar from '../../components/SearchBar';
import ListItem from './components/ListItem';
import colors from '../../config/colors';

const initFilters = [
  { id: 1, name: 'less than', active: false },
  { id: 2, name: 'greater than', active: false },
  { id: 3, name: 'for sale', active: false },
  { id: 4, name: 'for rent', active: false },
  { id: 5, name: '1-2 beds', active: false },
  { id: 6, name: '3-4 beds', active: false },
  { id: 7, name: '1-2 baths', active: false },
  { id: 8, name: '3-4 baths', active: false },
];

const toggleFilter = (filters, action) => {
  return filters.map((f) => {
    if (f.name === action) {
      f.active = !f.active;
    }
    return f;
  });
};

const reducer = (filters, action) => {
  switch (action.type) {
    case 'less than':
      return toggleFilter(filters, action.type);
    case 'greater than':
      return toggleFilter(filters, action.type);
    case 'for sale':
      return toggleFilter(filters, action.type);
    case 'for rent':
      return toggleFilter(filters, action.type);
    case '1-2 beds':
      return toggleFilter(filters, action.type);
    case '3-4 beds':
      return toggleFilter(filters, action.type);
    case '1-2 baths':
      return toggleFilter(filters, action.type);
    case '3-4 baths':
      return toggleFilter(filters, action.type);
    default:
      throw new Error();
  }
};

function ListingScreen(props) {
  const [filters, dispatch] = useReducer(reducer, initFilters);

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
          <FilterButton
            onPress={() => dispatch({ type: 'less than' })}
            style={
              filters[0].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="<$500,000"
          />
          <FilterButton
            onPress={() => dispatch({ type: 'greater than' })}
            style={
              filters[1].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title=">$500,000"
          />
          <FilterButton
            onPress={() => dispatch({ type: 'for sale' })}
            style={
              filters[2].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="For Sale"
          />
          <FilterButton
            onPress={() => dispatch({ type: 'for rent' })}
            style={
              filters[3].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="For Rent"
          />
          <FilterButton
            onPress={() => dispatch({ type: '1-2 beds' })}
            style={
              filters[4].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="1-2 Beds"
          />
          <FilterButton
            onPress={() => dispatch({ type: '3-4 beds' })}
            style={
              filters[5].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="3-4 Beds"
          />
          <FilterButton
            onPress={() => dispatch({ type: '1-2 baths' })}
            style={
              filters[6].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="1-2 Baths"
          />
          <FilterButton
            onPress={() => dispatch({ type: '3-4 baths' })}
            style={
              filters[7].active
                ? styles.filterButtonActive
                : styles.filterButton
            }
            title="3-4 Baths"
          />
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
  filterButtonActive: {
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: colors.filterSelected,
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
