import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    let style = {
      width: '100%',
      height: '100%',
      borderBottom: '1px solid #ddd',
      position: 'fixed',
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
    };
    return <section style={style}></section>;
  }
}
