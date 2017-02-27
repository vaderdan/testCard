/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Card,
  Button
} from 'react-native-elements'

export default class testCard extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Card
          title='HELLO WORLD'
          image={require('./images/pic2.png')}
          // containerStyle={{flex: 1 }}
          // wrapperStyle={{flex: 1}}
          >
          <Text style={{marginBottom: 10, color: 'black'}}>
            The idea with React Native Elements is more about component structure than actual design.
            The idea with React Native Elements is more about component structure than actual design.
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, height: 40,  marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
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

AppRegistry.registerComponent('testCard', () => testCard);
