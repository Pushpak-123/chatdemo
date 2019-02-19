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

import { GiftedChat } from 'react-native-gifted-chat'


type Props = {};
export default class App extends Component<Props> {


  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello '+this.props.navigation.state.params.name,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }


  render() {
    console.log(this.props);
    
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor:'green',alignItems:'center',  justifyContent: 'center'
        ,height:50}}>
          <Text style={{color:'white',alignSelf:'center'}}>{'Status '+this.props.navigation.state.params.status}</Text>
        </View>
      <GiftedChat
      style={{flex:1,backgroundColor:'gray'}}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      </View>
    )
  }
}
