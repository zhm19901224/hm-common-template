import React from 'react';
import { store, actions } from '../store/index';

function dispatchHoc(Wrap) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    dispatch(
      storeNamespace: string,
      actionNamespace: string,
      actionName: string,
      payload: any
    ): void {
      const storeState = store[storeNamespace];
      const action = actions[actionNamespace];
      if (!actionName) throw new Error('actionName is required!');
      if (!storeState) throw new Error('store not exists!');
      if (!action) throw new Error('action not exists!');
      action[actionName].call(storeState, payload);
    }

    render() {
      return <Wrap {...this.props} dispatch={this.dispatch}></Wrap>;
    }
  };
}

export default dispatchHoc;
