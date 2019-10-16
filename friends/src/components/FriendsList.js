import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';
import Friend from './Friend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [friendToEdit, setFriendToEdit] = useState(null);

  useEffect(() => {
    axiosWithAuth().get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  const addFriend = newFriend => {
    axiosWithAuth().post('/friends', newFriend)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteFriend = id => {
    axiosWithAuth().delete(`/friends/${id}`)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }

  const editFriend = friend => {
    axiosWithAuth().put(`/friends/${friend.id}`, friend)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
      .finally(setFriendToEdit(null));
  }

  const changeFriendToEdit = friend => {
    setFriendToEdit(friend);
  }

  return (
    <div className="friend-list">
      <FriendForm addFriend={addFriend} editFriend={editFriend} friendToEdit={friendToEdit} />
      <div className="friends">
        {friends.map(friend => {
          return (
            <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} changeFriendToEdit={changeFriendToEdit} />
          )
        })}
      </div>
    </div>
  )
}

export default FriendsList;