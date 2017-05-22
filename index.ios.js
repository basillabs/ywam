import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Wrapper from './app/components/wrapper';

export default class ywam extends Component {
  static navigationOptions = {
    title: 'Find My Mission',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Wrapper/>
      </View>
    );
  }
}

const app = StackNavigator({
  Home: { screen: ywam },
});

AppRegistry.registerComponent('ywam', () => app);
