import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Home.js';
import ClockScreen from './ClockInOut.js';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name = "Clock" component={ClockScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

/* export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
      </Stack.Navigator>
    </NavigationContainer>
  );
} */