import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation'
import Login from './js/containers/Login'
import Init from './js/containers/Init'

const App = StackNavigator({
  Login: {screen: Login},
  Init: {screen: Init}
})

export default App
  
