import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './friendsList';


class App extends Component {

  constructor() {
      super();
      this.state = {
          apple: []
      };
  }

componentDidMount() {

  axios
      .get('http://localhost:5000/friends')
      .then(response => {
          console.log(response);
          this.setState({
              apple: response.data
          });
      })
      .catch(function(error) {
          console.log(error);
      });
}

  render() {
    console.log(this.state);
    return ( 
      
      <div className="App">
        <h2>Friends!</h2>
        <FriendsList friends={this.state.apple} />

        
        
      </div>
    );
  }
}

export default App;
