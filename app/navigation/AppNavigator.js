import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ItemDetailScreen from '../screens/ItemDetail/ItemDetailScreen';
import ListingScreen from '../screens/Listing/ListingScreen';

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Listing">
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailItem"
        component={ItemDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
