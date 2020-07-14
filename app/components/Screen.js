import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === 'ios' ? (
        <View style={[styles.view, style]}>{children}</View>
      ) : (
        children
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
