import React, { Component } from 'react';
import { connect } from './store';

@connect
export default class Todo2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    let {
      todo2: { list },
    } = this.props;
    return (
      <>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}
