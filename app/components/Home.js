// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import WebView from './WebView';

export default class Home extends Component {
  render() {
    return (
      <div className="page">
        <WebView />
      </div>
    );
  }
}
