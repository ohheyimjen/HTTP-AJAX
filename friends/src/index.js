import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';

componentDidMount() {

    axios
        .get('http://localhost:3001')
        .then(response => {
            console.log(response);
            this.setState({
                items: res.data
            });
        })
        .catch(function(error) {
            console.log(error);
        });
}

ReactDOM.render(
    <Router>
    <App />, 
    document.getElementById('root')
    </Router>
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
