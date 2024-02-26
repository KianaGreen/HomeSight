// NotificationsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function NotificationsScreen({ navigation }) {
  // Your notifications logic here

  return (
    <View style={styles.container}>
      <Text style={styles.notificationText}>You have no new notifications.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  notificationText: {
    fontSize: 18,
    textAlign: 'center', 
  },
});

export default NotificationsScreen;
