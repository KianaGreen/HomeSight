import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#405C6F',
    height: 85, // Set the height as per your preference
    alignItems: 'center',
  },
  title: {
    color: 'white',
  
  },
});

export default CustomHeader;
