import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';


import { WebView } from 'react-native-webview';

const CalculatorScreen = () => {
  const calculatorUrl = 'https://www.homesightwa.org/mortgage-calculator/';

  return <WebView source={{ uri: calculatorUrl }} />;
};

export default CalculatorScreen;
