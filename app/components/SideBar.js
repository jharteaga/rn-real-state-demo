import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Screen from './Screen';

function SideBar({ ...rest }) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.text}>Jose Arteaga</Text>
      </View>
      <View style={styles.container}>
        <DrawerContentScrollView {...rest}>
          <DrawerItemList
            {...rest}
            activeTintColor="black"
            labelStyle={styles.label}
          />
        </DrawerContentScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'dodgerblue',
    padding: 16,
    paddingTop: 80,
  },
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SideBar;
