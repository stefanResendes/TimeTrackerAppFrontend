import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './Home.js';
import ClockScreen from './ClockInOut.js';

export default function App() {
  return (
    <View>
      <HomeScreen />
      <ClockScreen />
    </View>
  );
}