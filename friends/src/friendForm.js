import React from 'react';


class FriendForm extends React.Component {
    
    state = {
        id: '',
        name: '',
        age: '', 
        email: ''
    }

    componentDidMount() {
    
            if(this.props.currentFriend) {
                this.setState({
                    id: this.props.currentFriend.id,
                    name: this.props.currentFriend.name,
                    age: this.props.currentFriend.age,
                    email: this.props.currentFriend.email
                })
            }
        
    }

    handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(!this.props.currentFriend) {
            this.props.addFriend({
                ...this.state
            });
        }

    this.props.addFriend({...this.state})
     //call axios for post request. Use same endpoint (/friends) as the data you're fetching
   
             this.setState({
                id: '',
                name: '',
                age: '', 
                email: ''
             });
             //might need to change friend-list to friendList
            this.props.history.push('/friend-list');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text' 
                name='name' 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder='name' >
                </input>
                <input 
                type='text' 
                name='age' 
                value={this.state.age} 
                onChange={this.handleChange} 
                placeholder='age' >
                </input>
                <input 
                type='text' 
                name='email' 
                value={this.state.email} 
                onChange={this.handleChange} 
                placeholder='email' >
                </input>
            </form>
        );
    };
}

export default FriendForm;