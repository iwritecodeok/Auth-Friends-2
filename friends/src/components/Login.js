import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends')
        props.login();
      })
      .catch(err => console.log(err))
    setCredentials({ username: "", password: "" })
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
          <h1>username</h1>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <h1>password</h1>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login;