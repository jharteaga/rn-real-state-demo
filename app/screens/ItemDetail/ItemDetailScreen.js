import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';

function ItemDetailScreen(props) {
  return (
    <>
      <StatusBar style="light" />
      <Header />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ItemDetailScreen;
