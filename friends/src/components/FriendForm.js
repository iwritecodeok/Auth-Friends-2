import React, { useState, useEffect } from 'react';

const FriendForm = (props) => {
  const { addFriend, editFriend, friendToEdit } = props;
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" })

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(friendToEdit) {
      editFriend(newFriend)
    } else {
      addFriend({...newFriend, id: Date.now() })
    }
    setNewFriend({ name: "", age: "", email: "" });
  }

  useEffect(() => {
    if (friendToEdit) setNewFriend({...friendToEdit})
  }, [friendToEdit])

  return (
    <div className="friend-form">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>
            Name: 
          </label>
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>
            Age: 
          </label>
            <input
              type="number"
              name="age"
              value={newFriend.age}
              onChange={handleChange}
            />
        </div>
        <div className="form-field">
          <label>
            Email: 
          </label>
            <input
              type="email"
              name="email"
              value={newFriend.email}
              onChange={handleChange}
            />
        </div>
        <button>{friendToEdit ? "edit friend" : "add friend"}</button>
      </form>
    </div>
  )
}

export default FriendForm;