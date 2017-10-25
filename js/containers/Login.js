import React, { Component } from 'react'
import { AppRegistry,StyleSheet, Text, View, TouchableOpacity,ScrollView,Image } from 'react-native'
import { MKButton, MKColor, getTheme, MKIconToggle } from 'react-native-material-kit'
import Init from './Init'

export default class Login extends React.Component {
  constructor () {
    super()
    const theme = getTheme()
    const base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
  }
  static navigationOptions = {
    title : 'Login'
  }
  render () {
  const {navigate} = this.props.navigation
    return (
      <View>
        <TouchableOpacity 
          onPress={() => navigate("Init")}>
          <Text>Go to Init Screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
