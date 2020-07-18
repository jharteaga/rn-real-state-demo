import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../../../config/colors';

function Price(props) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.price}>$200,000</Text>
        <Text style={styles.city}>Vancouver, BC</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}> 14 hours ago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  city: {
    color: colors.gray,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeContainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    borderColor: colors.gray,
    opacity: 0.6,
  },
});

export default Price;
