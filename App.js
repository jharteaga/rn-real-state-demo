import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import ListingStack from './app/navigation/ListingStack';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={navigationTheme}>
        <ListingStack />
      </NavigationContainer>
    </>
  );
}
