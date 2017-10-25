import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export default class Init extends React.Component {
  constructor () {
    super()
    const {width, height} = Dimensions.get('window')
  }
    static navigationOptions = {
      title : 'Init'
    }
  render () {
    return (
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.containterText}>Card</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  card: {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 0, width: 0 },
    width: '100%',
    height: '50%',
    backgroundColor: '#777'
  },
  container: {
    padding: 1
  },
  containterText: {
    textAlign : 'center'
  }
});
