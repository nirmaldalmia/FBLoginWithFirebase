import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FBSDK from 'react-native-fbsdk';

const {
    LoginButton,
    AccessToken
} = FBSDK;

export class FBSignup extends Component {
    render() {
        return (
            // <TouchableOpacity style={styles.button} onPress={(e) => this.fbAuth(e)}>
            //     <Text style={styles.buttonText}>Signup with Facebook</Text>
            // </TouchableOpacity>
            <View>
                <LoginButton
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
                    onLogoutFinished={() => alert("logout.")} />
            </View>
        );
    }
}
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