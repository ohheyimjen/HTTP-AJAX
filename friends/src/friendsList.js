import React from 'react'
import Friends from './friends'


function Friend(props) {
    const friend = props.friends.find(
        friend => `${friend.id}` === props.match.params.id
    );
}

const FriendsList = props => {
    return (
        <div className="friends-list">
        {props.friends.map(friend => (
            <Friends key={friend.id} friend={friend} /> ))}
            <button onClick={() => props.addFriend(friend.id)}>Add Friend</button>
        </div>

    );
};

export default FriendsList;

