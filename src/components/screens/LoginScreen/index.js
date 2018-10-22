import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

class LoginScreen extends Component {

  login = () => {
    const formData = new FormData();
    formData.append("user", "test");
    formData.append("password", "test");

    fetch("http://headers.jsontest.com/", {
      method: "POST",
      body: formData
    })
      .then(res => {
        Alert.alert(JSON.stringify(res));
        if (res.ok) {
          return res.json().then(result => {
            this.props.navigator.push({
              screen: "HomeScreen",
              title: "Home",
              passProps: { result }
            });
          });
        }
      })
      .catch(err => {
        Alert.alert((err.reason || err.message));
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login screen</Text>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  button: {
    padding: 20,
    backgroundColor: "grey"
  },
  buttonText: {
    color: "white"
  }
});

export default LoginScreen;
