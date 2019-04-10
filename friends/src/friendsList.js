import React from 'react'

const FriendsList = props => {
    return (
        <div className="friends-list">
        {props.friends.map(friend => 
            <Friend key={id} friend={friend} />
        )}

        </div>
    );
}

export default FriendsList;