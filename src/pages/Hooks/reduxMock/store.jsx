import { createContext, Component } from 'react';
const Ctx = createContext();
const { Consumer } = Ctx;

let store = {
  global: {},
  todo1: {
    list: [],
  },
  todo2: {
    list: ['yyy', 'mmm', 'lll'],
  },
};

function connect(Wrap) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Consumer>{(data) => <Wrap {...this.props} {...data} />}</Consumer>
      );
    }
  };
}

const Provider = (props) => {
  return <Ctx.Provider value={store}>{props.children}</Ctx.Provider>;
};

export { Consumer, Provider, Ctx, connect };
