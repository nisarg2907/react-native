import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    overflow: 'scroll',
  },
  container: {
    padding: 8,
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 4,
    margin: 8,
    justifyContent: 'center',
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#50DBB4',
  },
  card3: {
    backgroundColor: '#5DA3FA',
  },
});
