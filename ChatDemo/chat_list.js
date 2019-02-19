/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

export default class Chat extends Component {

    status = ['typing...','OK','Needs Attention','Asst. Disabled'];

    state = {
      user : [  {
            key: '0',
            name : 'Pushpak',
            status : 0
        },
        {
            key: '9',
            name : 'Yash',
            status : 3
        }]
      };


      gotoDetails = (user) => {
        this.props.navigation.navigate('Chat',
        {name: user.name,
        status:this.status[user.status]});
      }

    renderItem = (user) => {
      console.log(user)
        return(
            <View style={styles.rowStyle}>
                <Text onPress={() =>  this.gotoDetails(user.item)} style={styles.nameStyle}>
                    {user.item.name}
                </Text>
                <Text style={styles.statusStyle}>
                    {this.status[user.item.status]}
                </Text>
            </View>
          
        );
      }
    
  render() {
    return (
      <View style={styles.container} >
      <View style={styles.rowStyle}>
              <Text>
                  User
              </Text>
              <Text>
                 Chat Status
              </Text>
          </View>   
          <View style={styles.separator}/>
       <FlatList 
          data={this.state.user}
          key="adasdsa"
          extraData={this.state}
          keyExtractor= {(item) => item.key}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
          renderItem={(item) => this.renderItem(item)}/>
      </View>
    )
  }
}

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 10,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  rowStyle :{
    width : width,
    
    justifyContent : 'space-between',
    flexDirection : 'row',
    padding : 20
},
separator : {
  width : width,
  height : 1,
  backgroundColor : 'gray'
}
});
