import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ListingScreen from './app/screens/Listing/ListingScreen';
import ItemDetailScreen from './app/screens/ItemDetail/ItemDetailScreen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ItemDetailScreen />
    </>
  );
}

const styles = StyleSheet.create({});
