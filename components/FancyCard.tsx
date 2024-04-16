import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}> Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Good Place</Text>
          <Text style={styles.cardLabel}>Good Label</Text>
          <Text style={styles.cardDescription}>Good Description </Text>
          <Text style={styles.cardFooter}>Good Footer</Text>
        </View>
        <View style={styles.cardBody}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    height: 360,
    width: 350,
    borderRadius: 6,
    marginHorizontal: 14,
    marginVertical: 12,
  },
  cardElevated: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardImage: {
    height: 200,
    width: 300,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'cover',
  },
  cardBody: {flex: 1, flexGrow: 1, paddingHorizontal: 12},
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {color: '#000000', fontSize: 14, marginBottom: 6},
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {color: '#000000', fontSize: 16},
});
