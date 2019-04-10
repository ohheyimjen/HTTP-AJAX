import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {

  constructor() {
      super();
      this.state = {
          friends: []
      };
  }

componentDidMount() {

  axios
      .get('http://localhost:5000/friends')
      .then(response => {
          console.log(response);
          this.setState({
              friends: response.data
          });
      })
      .catch(function(error) {
          console.log(error);
      });
}

  render() {
    return ( 
      
      <div className="friends">
        <h2>Friends!</h2>
        
        
        
      </div>
    );
  }
}

export default App;
