/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Signup from './components/page/Signup';
import Login from './components/page/Login';
import Dashboard2 from './components/page/Dashboard2';
import Detilschool from './components/page/Detilschool';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'white'
  }

});
