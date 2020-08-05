import React, { useState } from 'react';

const SimpleFormHooks = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  return (
    <div>
      <h2>Email: {email}</h2>
      <h2>Password: {password}</h2>
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