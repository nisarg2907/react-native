import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView style={styles.container} horizontal={true}>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>Card 1</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>Card 2</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>Card 3</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>Card 4</Text>
        </View>
        <View>
          <Text style={[styles.card, styles.cardElevated]}>Card 5</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: '800'},
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
    margin: 8,
  },
  container: {
    padding: 8,
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
  },
  cardElevated: {backgroundColor: '#CAD5E2'},
});
