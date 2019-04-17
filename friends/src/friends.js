import React from 'react'

const Friends = props => {
    return (
        <div className="friends">
            <p>{props.friend.name}</p>
            <p>{props.friend.email}</p>
        </div>
    );
}

export default Friends;