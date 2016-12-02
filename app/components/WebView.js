import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './WebView.css';

const webviewUrl = 'https://github.com/hisasann';

export default class TouchArea extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.webview = ReactDOM.findDOMNode(this.refs.webview);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <webview ref="webview" src={webviewUrl}></webview>
    );
  }
}
