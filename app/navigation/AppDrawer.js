import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ListingStack from './ListingStack';
import FavoritesStack from './FavoritesStack';
import MessagesStack from './MessagesStack';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Listing">
      <Drawer.Screen name="Listing" component={ListingStack} />
      <Drawer.Screen name="Favorites" component={FavoritesStack} />
      <Drawer.Screen name="Messages" component={MessagesStack} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
