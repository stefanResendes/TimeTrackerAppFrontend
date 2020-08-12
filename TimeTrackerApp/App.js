import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Home.js';
import ClockScreen from './ClockInOut.js';
import SummaryScreen from './Summary.js';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name = "Clock" component={ClockScreen}/>
        <Stack.Screen name = "Summary" component={SummaryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;