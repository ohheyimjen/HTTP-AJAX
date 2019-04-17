import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './friendsList';
import {Route, NavLink} from 'react-router-dom';
import FriendForm from './friendForm';


class App extends Component {

  constructor() {
      super();
      this.state = {
          friends: [],
          currentFriends: []
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
      }


      deleteFriend = id => {
        axios.delete(`http://localhost:friends/${id}`)
          .then(response => {
            this.setState({friends: response.data})
          })
          .catch(error => console.log(error));
          
          this.props.history.push('/friends-list');
      }

      

      updateFriend= friend => {
        axios.put(`http://localhost:friends/${friend.id}`, friend)
          .then(response => {
            this.setState({fiends: response.data})
          })
          .catch(error => console.log(error));
      }

      setupUpdate = friend => {
        this.setState({ currentFriend: friend });

        this.props.history.push('/friend-form');

      };
      
  


  render() {
    console.log(this.state);
    return ( 
      
      <div className="App">
        
        <FriendsList friends={this.state.friends} />
        <NavLink to='/friend-form'>Add Friend</NavLink>

        <Route 
        path='/friend-form' 
        render={props => (
          <FriendForm 
          {...props} 
          addFriend={this.addFriend} 
          updateFriend={this.updateFriend}
          currentFriend={this.state.currentFriend}
          />
        )}
        />

        <button onClick={() =>
          props.setupUpdate(friend)}
          >Add new bestie
          </button>
      </div>
    );
  }
}
// const AppWithRouter = withRouter(App);


//add <Route for <friendForm

export default App;
