import React from 'react';

const Friend = props => {
  const { friend, deleteFriend, changeFriendToEdit } = props;

  return (
    <div className="friend">
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={() => changeFriendToEdit(friend)}>Edit</button>
      <button onClick={() => deleteFriend(friend.id)}>Delete</button>
    </div>
  )
}

export default Friend;