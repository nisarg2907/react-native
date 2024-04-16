import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      mobile: '123-456-7890',
      email: 'dummy1@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      mobile: '987-654-3210',
      email: 'dummy2@example.com',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      mobile: '555-555-5555',
      email: 'dummy3@example.com',
    },
    {
      id: 4,
      name: 'Bob Brown',
      mobile: '777-777-7777',
      email: 'dummy4@example.com',
    },
    {
      id: 5,
      name: 'Eve White',
      mobile: '999-999-9999',
      email: 'dummy5@example.com',
    },
    // Include other contacts as in your original list
  ];

  return (
    <ScrollView style={styles.container}>
      {contacts.map(contact => (
        <View key={contact.id} style={styles.contactCard}>
          <Text style={styles.nameText}>{contact.name}</Text>
          <Text style={styles.mobileText}>{contact.mobile}</Text>
          <Text style={styles.emailText}>{contact.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0', // A light grey background color for the ScrollView
  },
  contactCard: {
    backgroundColor: '#ffffff', // White background for each contact card
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Adding a subtle shadow to make the cards stand out
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4, // Space between the name and mobile
    color: '#333333', // Dark color for better readability
  },
  mobileText: {
    fontSize: 16,
    color: '#555555', // Slightly lighter color than the name
    marginBottom: 2, // Space between the mobile number and email
  },
  emailText: {
    fontSize: 15,
    color: '#777777', // Even lighter color for the email
  },
});
