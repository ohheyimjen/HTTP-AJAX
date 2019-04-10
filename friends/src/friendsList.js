import React from 'react'
import Friends from './friends'

const FriendsList = props => {
    return (
        <div className="friends-list">
        {props.friends.map(friend => (
            <Friends key={friend.id} banana={friend} /> ))}

        </div>
    );
};

export default FriendsList;