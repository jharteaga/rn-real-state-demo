import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import Information from './components/Information';
import Price from './components/Price';

function ItemDetailScreen(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />
      <Header />
      <Price />
      <Information />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ItemDetailScreen;
