import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import Price from './components/Price';

function ItemDetailScreen(props) {
  return (
    <>
      <StatusBar style="light" />
      <Header />
      <Price />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ItemDetailScreen;
