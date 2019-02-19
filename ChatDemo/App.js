/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'
import  Chat from "./chat_list";
import ChatDetails from "./chat_details";
import { createAppContainer,createStackNavigator } from "react-navigation";

type Props = {};

let nav = createStackNavigator({
  List : {
    screen : Chat,
  },
  Chat : {
    screen : ChatDetails,
  }
})

let Nav = createAppContainer(nav);


export default class App extends Component<Props> {

  
 
  render() {
    return (
      <Nav />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
