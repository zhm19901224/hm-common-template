import React from 'react';
import { store, actions } from '../store/index';

function dispatchHoc(stateNs?: string, actionNs?: string): any {
  return function (Wrap) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }

      dispatch(action: string, payload: any): void {
        if (!stateNs) throw new Error('当前组件没有注入状态命名空间');
        if (!actionNs) throw new Error('当前组件没有注入action命名空间');
        if (!action) throw new Error('action name is required');
        this.dispatchByNs(stateNs, actionNs, action, payload);
      }

      getState() {
        if (!stateNs) throw new Error('当前组件没有注入状态命名空间');
        return this.getStateByNs(stateNs);
      }

      dispatchByNs(
        storeNamespace: string,
        actionNamespace: string,
        actionName: string,
        payload: any
      ): void {
        const storeState = store[storeNamespace];
        const action = actions[actionNamespace];
        if (!storeNamespace) throw new Error('storeNamespace is required!');
        if (!actionNamespace) throw new Error('actionNamespace is required!');
        if (storeNamespace === 'global')
          throw new Error('global cant be used!');
        if (actionNamespace === 'global')
          throw new Error('global cant be used!');
        if (!actionName) throw new Error('actionName is required!');
        if (!storeState) throw new Error('state not exists!');
        if (!action) throw new Error('action not exists!');

        action[actionName].call(storeState, payload);
      }

      getStateByNs(storeNamespace: string) {
        if (!storeNamespace) throw new Error('storeNamespace is required!');
        const storeState = store[storeNamespace];
        if (!storeState) throw new Error('state not exists!');
        return storeState;
      }

      render() {
        return (
          <Wrap
            {...this.props}
            dispatchByNs={this.dispatchByNs}
            getStateByNs={this.getStateByNs}
            dispatch={this.dispatch}
            getState={this.getState}
          />
        );
      }
    };
  };
}

export default dispatchHoc;
