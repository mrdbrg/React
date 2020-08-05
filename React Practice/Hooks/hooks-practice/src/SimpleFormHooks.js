import React, { useState } from 'react';

const SimpleFormHooks = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  return (
    <div>
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>
        <label>Email</label>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
      <label>Password</label>
      <input 
        type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
    </div>
  )
}

export default SimpleFormHooks;