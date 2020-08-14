/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
} from "react-native";

const TestModule = NativeModules.TestModule;

class App extends Component {
  componentDidMount() {
    TestModule.testing("hallo", this.callback);
  }

  callback = (data) => {
    console.log(data);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Robi</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
