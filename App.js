import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './src/screen/AuthScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import colors from './src/config/colors';
import EntriesScreen from './src/screen/EntriesScreen';
import EntryScreen from './src/screen/EntryScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: colors.PINK
  },
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles}>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="Entries" component={EntriesScreen} />
        <Stack.Screen name="Entry" component={EntryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.PINK,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
