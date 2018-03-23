import HomeScreen from "./src/HomeScreen/HomeScreen";
import ButtonPage from "./src/ButtonPages/ButtonPage";
import SettingsPage from "./src/Settings/SettingsPage";
import FunctionList from "./src/ButtonPages/FunctionList";




import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation'


const App = StackNavigator({
  Home: { screen: HomeScreen},
  ButtonScreen: {screen: ButtonPage},
  Settings: {screen: SettingsPage},
  Functions: {screen: FunctionList},
});
export default App;
