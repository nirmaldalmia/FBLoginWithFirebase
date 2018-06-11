import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SignupForm } from '../components/SignupForm';

export class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SignupForm />
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
      },
      signupContainer: {
          flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      signupText: {
          color: 'rgba(255, 255, 255, 0.6)',
          marginVertical: 16,
          fontSize: 16
      },
      signupButton: {
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold'
      }
    })
