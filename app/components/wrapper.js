import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView
} from 'react-native';

const propTypes = {
  url: PropTypes.string,
};
const defaultProps = {
  url: 'https://findmymission.com/',
};


export default class Wrapper extends Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.url}}
        startInLoadingState
      />
    );
  }
}
Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;
