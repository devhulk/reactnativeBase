import React, { Component } from 'react'
import { AppRegistry,StyleSheet, Text, View, TouchableOpacity,ScrollView,Image } from 'react-native'
import Init from './Init'

export default class Login extends React.Component {
  constructor () {
    super()
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
