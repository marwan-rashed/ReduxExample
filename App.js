/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tasks from './src/screens/tasks';
import AddTask from './src/screens/addTask';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Screen name = 'tasks' component = { Tasks }/>
      <Stack.Screen name = 'addTask' component = { AddTask }/>
    </NavigationContainer>
  );
}

export default App;
