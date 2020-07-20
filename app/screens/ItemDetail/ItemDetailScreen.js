import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import Information from './components/Information';
import Price from './components/Price';

function ItemDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />
      <Header imageUrl={item.imageUrl} thumbnailUrl={item.thumbnailUrl} />
      <Price price={item.price} address={item.address} />
      <Information
        squareFeet={item.squareFeet}
        bedrooms={item.bedrooms}
        bathrooms={item.bathrooms}
        garage={item.garage}
        description={item.description}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ItemDetailScreen;
