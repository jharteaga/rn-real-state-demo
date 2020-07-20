import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../screens/Favorites/FavoritesScreen';

const Stack = createStackNavigator();

function FavoritesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default FavoritesStack;
