import React, { useState } from 'react'

const RegistrationForm = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  //event handling functions
  const handleUname = (event) => {
      console.log(event.target.value)
      setUsername(event.target.value);
  }
  const handlePwd = (event) => {
      console.log(event.target.value)
      setPassword(event.target.value);
  }
  const handleEmail = (event) => {
      console.log(event.target.value)
      setEmail(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault(); //it stops browsers default behavior
    console.log("Given Username:" + username);
    console.log("Given password:" + password);
    console.log("Email:" + email);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>User Name:</label>
            <input 
               type='text' 
               id="username" 
               name="username"
               value={username} 
               onChange={handleUname}
               placeholder='Enter User name'/>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input 
              type='password' 
              id="password" 
              name="password"
              value={password}
              onChange={handlePwd}
              placeholder='Enter Passsword'/>
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input 
              type='email' 
              id="email" 
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder='Enter Email'/>
        </div>
        <button type='submit'>Register</button>
      </form>
      <h2>Registered Users:</h2>
      <p>
        User name: {username}<br/>
        Password : {password} <br/>
        Email : {email} <br/>    
      </p>
    </div>
  )
}

export default RegistrationForm