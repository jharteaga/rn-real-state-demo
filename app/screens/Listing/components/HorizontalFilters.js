import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import FilterButton from '../../../components/FilterButton';
import colors from '../../../config/colors';

function HorizontalFilters({ filters, onDispatch }) {
  return (
    <View style={styles.filters}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {filters.map(
          (f) =>
            f.visible && (
              <FilterButton
                key={f.id}
                onPress={() => onDispatch({ type: f.name })}
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
  );
}

const styles = StyleSheet.create({
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
});

export default HorizontalFilters;
