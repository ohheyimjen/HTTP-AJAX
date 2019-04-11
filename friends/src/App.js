import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './friendsList';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom';
import FriendForm from './friendForm';


class App extends Component {

  constructor() {
      super();
      this.state = {
          apple: [],
          currentFriends: []
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
  
      addFriend = friend => {
       //call axios for post request. Use same endpoint (/friends) as the data you're fetching
       axios.post('http://localhost:5000/friends', friend)
            
       .then(response => {
           this.setState({
             friends: response.data
           });
       })
       .catch(error => {
           console.log('New phone, who this?');
       });
      console.log('After the get request');

      deleteFriend = id => {
        axios.delete(`http://localhost:friends/${id}`)
          .then(response => {
            this.setState({friends: response.data})
          })
          .catch(error => console.log(error));
      }

      this.props.history.push('/friends-list');

      updateFriend= friend => {
        axios.put(`http://localhost:friends/${friend.id}`, friend)
          .then(respone => {
            this.setState({fiends: response.data})
          })
          .catch(error => console.log(error));
      }

      setupUpdate = friend => {
        this.setState({})

      }
      
  }
}

  render() {
    console.log(this.state);
    return ( 
      
      <div className="App">
        
        <FriendsList friends={this.state.apple} />
        
        <Route 
        path='/friend-form' 
        render={props => 
          <FriendForm {...props} addFriend={this.addFriend} />}
        />


        
        
      </div>
    );
  }
}
const AppWithRouter = withRouter(App);


//add <Route for <friendForm

export default App;
