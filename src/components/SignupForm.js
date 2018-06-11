import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import firebase from 'react-native-firebase';

export class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleSignup(event) {
        var config = {
            apiKey: "AIzaSyBxEMYQmFi3aMTyCtpuxMmWmVRtvRMasjw",
            authDomain: "fbloginwithfirebase-bd9d0.firebaseapp.com",
            databaseURL: "https://fbloginwithfirebase-bd9d0.firebaseio.com",
            projectId: "fbloginwithfirebase-bd9d0",
            storageBucket: "fbloginwithfirebase-bd9d0.appspot.com",
            messagingSenderId: "262294182151"
          };
          firebase.initializeApp(config);
          var email=this.state.email;
          var password=this.state.password;
          firebase.auth().createUserWithEmailAndPassword(email, password);
        Alert.alert("Your account was successfully created!");
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Email"
                    onChangeText={ (textValue) => this.setState({email: textValue})}
                    style={styles.input}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    placeholderTextColor='#ffffff' />
                <TextInput
                    placeholder="Password"
                    onChangeText={(passwordValue) => this.setState({password: passwordValue})}
                    style={styles.input}
                    placeholderTextColor='#ffffff'
                    secureTextEntry={true} />
                <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#455a64',
            marginTop: 20,
        },
        input: {
            width: 300,
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            paddingHorizontal: 16,
            marginVertical: 10,
            fontSize: 16,
            color: '#ffffff'
        },
        button: {
            width: 300,
            backgroundColor: '#1c313a',
            borderRadius: 25,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
        },
        buttonText: {
            fontSize: 16,
            fontWeight: '500',
            color: '#ffffff',
        }
    }
)