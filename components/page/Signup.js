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
  BackHandler
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

export default class Signup extends Component<{}>{
    static navigationOptions = {
      header: null
    };

    constructor(props){
    super(props);
    this.state =({
      username : '',
      password : '',
      repassword : '',
      email : '',
      buttonText : 'Sign Up',
      fullName : '',
      fakultas: '',
      alert : false,
      buttonText : 'Sign Up',
      activityIndicatorColor : 'rgba(230,29,76,1)'
    });
}

componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
}

componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

backPressed = () => {
  const { navigation } = this.props;
  navigation.goBack();
  navigation.state.params.onSelect({ selected: true });
  return true;
}

signUp=()=>{
  if (this.state.password != this.state.repassword || this.state.email == '' || this.state.password == '' ||  this.state.repassword == '' ||  this.state.username == '' ||  this.state.fullName == '' ) {
    this.setState({
      alert : true
    });
  }
  else{

    this.setState({
      activityIndicatorColor : 'white',
      buttonText : ''
});

firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(() => {
      var userId = firebase.auth().currentUser.uid;
      AsyncStorage.multiSet([
          ["email", this.state.email],
          ["password", this.state.password],
          ["userId", userId]
        ]);
      this.writeToDatabase(userId);
    }).catch((error) => {
        alert("error " + error.message );
    });
  }

}

writeToDatabase = (userId) => {
  let today = new Date();
  let Times = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let sortTime = -1*today.getTime();
  var database = firebase.database().ref("users").child(userId);
  database.set({
    userId : userId,
    sortTime : sortTime,
    createdAt : Times,
    email : this.state.email,
    username :this.state.username,
    fullName : this.state.fullName,
    fakultas: this.state.fakultas,
  }).then((snapshot)=>{

     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {

        AsyncStorage.multiSet([
          ["email", this.state.email],
          ["password", this.state.password],
          ["userId", userId],
          ["username", this.state.username]
        ]);
      /** Set AsyncStorage START **/
      const { navigate } = this.props.navigation;
      navigate('Dashboard2');

      }).catch((error) => {
          alert("error " + error.message );

      });

  });

}


  render(){

      const { navigate } = this.props.navigation;

    return(

      <View style={styles.container}>
      <View style={styles.container1}>

         <Image style={styles.logo}
          source={require('../image/Logo.png')}/>
            <Text style={styles.logoText}>SEAVOL</Text>
            <Text style={styles.logoText}>School Teaching Volunter</Text>
      </View>
      <View style={styles.container2}>

        <TextInput style={styles.kotakInput} placeholder="Nama" onChangeText={(fullName)=>this.setState({fullName})}/>
        <TextInput style={styles.kotakInput} placeholder="Username" onChangeText={(username)=>this.setState({username})}/>
        <TextInput style={styles.kotakInput} placeholder="Email" onChangeText={(email)=>this.setState({email})}/>
        <TextInput style={styles.kotakInput} placeholder="Fakultas" onChangeText={(fakultas)=>this.setState({fakultas})}/>
        <TextInput style={styles.kotakInput} placeholder="Password"
        secureTextEntry={true} onChangeText={(password)=>this.setState({password})}/>
        <TextInput style={styles.kotakInput} placeholder="Confirm Password"
        secureTextEntry={true} onChangeText={(repassword)=>this.setState({repassword})}/>

        <TouchableOpacity style={styles.signupButn} onPress={()=>this.signUp()} >
          <Text style={styles.TombolSignup}>{this.state.buttonText}</Text>
        </TouchableOpacity>
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
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
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  },

  kotakInput: {
    width:300,
    borderRadius: 25,
    paddingVertical: 10,
    color : 'grey'

  },
  TombolSignup: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  signupButn: {
    width: 150,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 27,
    marginVertical: 10,
    justifyContent: 'center'
  }
});
