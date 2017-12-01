

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  Modal,
  BackHandler
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

var inisialisasi = {
    apiKey: "AIzaSyDgveHRC9G7-s3WHnrR4SKTP4xxsLZXius",
    authDomain: "seavol-72ebd.firebaseapp.com",
    databaseURL: "https://seavol-72ebd.firebaseio.com",
    projectId: "seavol-72ebd",
    storageBucket: "seavol-72ebd.appspot.com",
    messagingSenderId: "345437720293"
  };

  const firebaseInit = firebase.initializeApp(inisialisasi);

export default class Login extends Component<{}> {

  static navigationOptions = {
    header:null,
  };
  constructor(props){
      super(props);
      this.state =({
        email : '',
        password : '',
        activityIndicatorColor : 'rgba(230,29,76,1)',
        loginText : 'Login',
        modalShow : false,
        selected: false,
        alert : false,
        firebaseError : false
      });

  }//fungsi konstruktor untuk meng construct dan memberikan sekumpulan variabel dan dinyatakan dengan (this.state) dimana variabel variabel ini akan dipanggil berdasarkan propertinya

  onSelect = data => {
      this.setState(data);
    };

    onPress = () => {
        const { navigate } = this.props.navigation;
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
        navigate("Signup", { onSelect: this.onSelect });
    };

    login=()=>{
      if (this.state.email == '' || this.state.password == '') {
        this.setState({
          alert : true
        });
      }
      else{

          this.setState({
            activityIndicatorColor : 'white',
            loginText : '',
            modalShow : true
          });

          const { navigate } = this.props.navigation;//pembuatan constanta pengenal variabel props navigasi

            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {

                  //get user id from async storage database .
                  var userId = firebase.auth().currentUser.uid;
                  var database = firebase.database().ref("users").child(userId);
                  database.once('value',(snapshot)=>{

                    AsyncStorage.multiSet([
                      ["email", this.state.email],
                      ["password", this.state.password],
                      ["userId", userId],
                      ["username", snapshot.val().username]
                    ]);

                  });
                  this.setState({
                    modalShow : false
                  });
                  navigate('Dashboard2');

              }).catch((error) => {

                  this.setState({
                    firebaseError : true,
                    activityIndicatorColor : 'rgba(230,29,76,1)',
                    loginText : 'Login',
                    modalShow : false
                  });
              });

      }

    }

  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.backPressed);
  }

  componentDidUpdate=()=>{

      BackHandler.addEventListener('hardwareBackPress', this.backPressed);

  }

  componentWillUnmount() {
     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  backPressed = () => {
    BackHandler.exitApp();
    return true;
  }
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <View style={styles.container3}>

         <Image style={styles.logo}
          source={require('../image/Logo.png')}/>
            <Text style={styles.logoText}>SEAVOL</Text>
            <Text style={styles.logoText}>School Teaching Volunter</Text>
      </View>
      <View style={styles.container2}>

        <TextInput style={styles.cobaInput} placeholder="Email" onChangeText={(email)=>this.setState({email})}/>
        <TextInput style={styles.cobaInput} placeholder="Password"
        secureTextEntry={true} onChangeText={(password)=>this.setState({password})}/>

        <TouchableOpacity style={styles.loginButn} onPress={()=>this.login()}>
          <Text style={styles.TombolLogin}>{this.state.loginText}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.daftar} onPress={()=>this.onPress()}>
         <Text>Belum punya akun? Silahkan Daftar.</Text>
         </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  cobaInput: {
    width:300,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },

  TombolLogin: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  loginButn: {
    width: 150,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 27,
    marginVertical: 10,
    justifyContent: 'center'
  },

  daftar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 30
  },

  logoText: {
    fontSize: 18,
    color:'grey',
    marginVertical:5
  },

  logo:{
    width: 130,
    height: 140
  }

});
