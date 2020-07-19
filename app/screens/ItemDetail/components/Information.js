import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import colors from '../../../config/colors';

function Information(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>House Information</Text>
      <View style={styles.infoContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>1,416</Text>
            <Text style={styles.label}>Square Feet</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>3</Text>
            <Text style={styles.label}>Bedrooms</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>2</Text>
            <Text style={styles.label}>Bathrooms</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.squareInfo}>2</Text>
            <Text style={styles.label}>Garage</Text>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.description}>
        Clean and well kept two-level home on a large 46.5x120 lot on a quiet
        cul-de-sac and high side of the road in popular Fraserview area!
        Featuring 3 bedrooms and 2 Baths on the top floor, bright and spacious
        living room and dining room with laminate flooring and new paint
        throughout and updated kitchen with newer appliances and Fischer Paykal
        Induction Stove.
      </Text>
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
