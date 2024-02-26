// Header.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require('./app/assets/hslogo.jpeg')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff', // Customize the background color of the header if needed
    paddingTop: 20, // Adjust the padding as needed to keep the logo below the status bar
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
});

export default Header;
