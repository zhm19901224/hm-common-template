import React, { Component } from 'react';
import ReactDom from 'react-dom'
import styles from './index.scss'
class App extends Component {
    render() {
        return <h1 className={styles.title}>This is a React App!</h1>
    }
}

ReactDom.render(<App />, document.getElementById('root'))