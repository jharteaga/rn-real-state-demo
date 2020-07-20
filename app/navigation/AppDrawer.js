import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingStack from './ListingStack';
import FavoritesStack from './FavoritesStack';
import MessagesStack from './MessagesStack';
import SideBar from '../components/SideBar';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Listing"
      drawerContent={(props) => <SideBar {...props} />}
    >
      <Drawer.Screen
        name="Listing"
        component={ListingStack}
        options={{
          drawerLabel: 'Houses',
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="home-city"
              color={tintColor}
              size={20}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          drawerLabel: 'Favorites',
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="heart" color={tintColor} size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          drawerLabel: 'Messages',
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="message"
              color={tintColor}
              size={20}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
