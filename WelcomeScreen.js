import React from 'react';
import { View, Text, Button } from 'react-native';

function WelcomeScreen({ navigation }) {
  const handleSkip = () => {
   
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to HomeSight!</Text>
      <Text>We are a non-profit Community Development Corporation that wants to help make homeownership a reality for you! We offer first-time homebuyer education, financial counseling, purchase assistance, new home development, and 1st mortgage originations. </Text>
      <Button title="Skip for now" onPress={handleSkip} />
    </View>
  );
}

export default WelcomeScreen;

