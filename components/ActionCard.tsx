import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openSite = (webLink: string) => {
    Linking.openURL(webLink);
  };

  return (
    <View>
      <Text style={styles.headingText}> Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headertext}>What's New with me</Text>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text>
              <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Text>
          </View>
          <View style={styles.footerCotainer}>
            <TouchableOpacity
              onPress={() => {
                openSite('https://www.youtube.com');
              }}>
              <Text>Watch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#FFFFFF', // Light background for the card
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: 'hidden', // Keeps everything within the rounded corners
  },
  elevatedCard: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Slight elevation for Android
  },
  headingContainer: {
    padding: 15, // Padding around the text and image within the card
  },
  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Space between the header text and the image
    color: '#444',
  },
  cardImage: {
    height: 200,
    width: '100%', // Makes the image responsive to card width
    alignSelf: 'center',
    marginBottom: 10,
  },
  bodyContainer: {
    paddingVertical: 10, // Space above and below the text
  },
  footerCotainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns the watch button to the right
    padding: 10,
  },
  watchButton: {
    backgroundColor: '#007BFF', // A bright blue color for the button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  watchButtonText: {
    color: '#FFFFFF', // White text on the blue button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
