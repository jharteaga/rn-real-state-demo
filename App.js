import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppDrawer from './app/navigation/AppDrawer';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={navigationTheme}>
        <AppDrawer />
      </NavigationContainer>
    </>
  );
}
