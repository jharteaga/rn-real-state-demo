import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ListingScreen from './app/screens/Listing/ListingScreen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ListingScreen />
    </>
  );
}

const styles = StyleSheet.create({});
