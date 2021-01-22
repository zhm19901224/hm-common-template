import React, { Component } from 'react';
import ReactDom from 'react-dom'
import styles from './index.scss'
import { getUserInfo } from './api'
import num from 'pages/a'
class App extends Component {
    componentDidMount(){
        getUserInfo('/api/getUserInfo', 'get', {aaa: 123})
    }
    render() {
        return <h1 className={styles.title}>This is a React App!</h1>
    }
}

ReactDom.render(<App />, document.getElementById('root'))