import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FBSDK from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

const {
    LoginButton,
    AccessToken
} = FBSDK;

export class FBSignup extends Component {
    render() {
        return (
            // <TouchableOpacity style={styles.button} onPress={this.onFBButtonPress}>
            //     <Text style={styles.buttonText}>Signup with Facebook</Text>
            // </TouchableOpacity>
            <View>
                {/* <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        alert(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")} /> */}
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        const provider = firebase.auth.FacebookAuthProvider;
                                        // provider.addScope=('email');
                                        const credential = provider.credential(data.accessToken.toString());
                                        firebase.auth().signInAndRetrieveDataWithCredential(credential)
                                            .then(function (userCredential) {
                                                console.log(JSON.stringify(userCredential));
                                            });
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")} />
            </View>
        );
    }
}

export default FBSignup;

const styles = StyleSheet.create(
    {
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
);