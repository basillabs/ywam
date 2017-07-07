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


export default class Wrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false
    };

    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.state.canGoBack) {
        this.webView.goBack();
        return true;
      }
      return false;
    });
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack
    });
  };

  render() {
    return (
      <WebView
        ref={(webview) => { this.webView = webview; }}
        onNavigationStateChange={this.onNavigationStateChange}
        source={{uri: this.props.url}}
        startInLoadingState
      />
    );
  }
}
Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;
