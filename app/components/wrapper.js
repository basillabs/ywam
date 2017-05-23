import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  BackHandler,
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

const WEBVIEW_REF = 'webview';


export default class Wrapper extends Component {

  constructor(props) {
    super();
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.refs[WEBVIEW_REF].goBack();
      return true;
    });
  }

  render() {
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{uri: this.props.url}}
        startInLoadingState
      />
    );
  }
}
Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;
