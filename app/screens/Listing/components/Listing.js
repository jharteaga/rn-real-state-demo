import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ListItem from './ListItem';

function Listing({ houses }) {
  const renderItem = ({ item }) => (
    <ListItem item={item} style={styles.listItem} />
  );

  return (
    <View style={styles.listing}>
      {houses.length ? (
        <FlatList
          data={houses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.text}>No Results</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listing: {
    flex: 1,
    marginTop: 5,
  },
  listItem: {
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
});

export default Listing;
