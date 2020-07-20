import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import colors from '../../../config/colors';

function Information({ squareFeet, bedrooms, bathrooms, garage, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>House Information</Text>
      <View style={styles.infoContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>
              {squareFeet.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </Text>
            <Text style={styles.label}>Square Feet</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>{bedrooms}</Text>
            <Text style={styles.label}>Bedrooms</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>{bathrooms}</Text>
            <Text style={styles.label}>Bathrooms</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>{garage}</Text>
            <Text style={styles.label}>Garage</Text>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    marginRight: 25,
  },
  container: {
    marginTop: 25,
    marginHorizontal: 30,
    flex: 1,
  },
  description: {
    marginVertical: 20,
    textAlign: 'justify',
    lineHeight: 20,
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  squareInfo: {
    borderWidth: 0.8,
    paddingVertical: 20,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: colors.gray,
    width: 80,
    opacity: 0.9,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Information;
