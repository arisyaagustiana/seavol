import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry
} from 'react-native';

import Signup from './components/page/Signup';
import Login from './components/page/Login';
import Dashboard2 from './components/page/Dashboard2';
import Detilschool from './components/page/Detilschool';
import { StackNavigator } from 'react-navigation';

export default class Index extends Component<{}> {

static navigationOptions={
  header: null,
};

  render() {

    const { navigation } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

      <Login navigation={navigation}/>


      </View>
    );
  }
}

const Navigasi = StackNavigator ({
Login : { screen : Login},
Signup : { screen : Signup},
Dashboard2: { screen : Dashboard2},
Detilschool : { screen : Login}
});

const styles = StyleSheet.create({
container : {
  flex: 1
}
});

AppRegistry.registerComponent('seavol', () => Navigasi);
