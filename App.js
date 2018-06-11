import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Signup } from './src/pages/Signup';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor='#1c313a' />
        <Signup />
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#455a64'
    }

  }
)