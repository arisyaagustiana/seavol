import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,


} from 'react-native';


import GridView from 'react-native-super-grid';
import Drawer from 'react-native-drawer';
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';

var{width,height}=Dimensions.get('window');
export default class Dashboard extends Component<{}> {
  constructor(props){
      super(props);
      this.state =({
        items : [
        { name: './../image/sdn3ungasan.png', code: '#1abc9c' },     ]
      });
    }
closeControlPanel = () => {
   this._drawer.close();
 };
 openControlPanel = () => {
   this._drawer.open();
 };

  render() {
    return (
      <Drawer
          type="overlay"
          ref={(ref) => this._drawer = ref}
          content={
            <View style={{height: height, width: width-100, backgroundColor:'red'}}>
            <List>
            <ListItem icon>
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text>Profile</Text>
              </Body>

            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="exit" />
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>

            </ListItem>
          </List>

            </View>
          }
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
              <View style={styles.container}>
              <TouchableOpacity onPress={()=>this.openControlPanel()}>
                <Icon name='menu'/>
              </TouchableOpacity>
                <GridView
                        itemWidth={130}
                        items={this.state.items}
                        renderItem={item => (
                          <View  >
                              <TouchableOpacity onPress={()=>this.gotoView()}>
                                <Image style={{width: (width/2)-15, height : 150}} source={require('./../image/sdn3ungasan.png')} />
                              </TouchableOpacity>

                              <TouchableOpacity onPress={()=>this.gotoView()}>
                                <Image style={{width: (width/2)-15, height : 150}} source={require('./../image/sdn3ungasan.png')} />
                              </TouchableOpacity>

                              <View style={{position : 'absolute', zIndex : 1, bottom : 0,width: (width/2)-15, height : 40, backgroundColor : 'rgba(255, 255, 255,0.6)'}}></View>
                                <View style={{height : 40, position : 'absolute', bottom : 0, zIndex : 1, paddingTop : 5, paddingLeft : 4}}>
                                  <TouchableOpacity onPress={()=>this.setState({modalVisible : true})}>

                                  </TouchableOpacity>
                                </View>
                              <View style={{marginLeft : 30,height : 40,width : (width/2) - 46, position : 'absolute', bottom : 0, zIndex : 2}}>
                                  <Text style={{textAlign : 'center', marginTop : 10, color : 'black'}}>Night Party</Text>
                              </View>
                          </View>
                          )}
                      />

              </View>
        </Drawer>

    );
  }
}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    height: height,
    width: width,
  },

  daftar: {
    color: 'green'
  }


});
