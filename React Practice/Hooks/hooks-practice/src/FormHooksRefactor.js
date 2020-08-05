import React from 'react';
import userInputState from './hooks/userInputState'

const FormHooksRefactor = () => {

  const [ email, updateEmail ] = userInputState("")
  const [ password, updatePassword ] = userInputState("")

  return (
    <div>
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>
        <label>Email</label>
        <input 
          type="text" 
          value={email}
          onChange={updateEmail}
          />
      <label>Password</label>
      <input 
        type="text" 
        value={password}
        onChange={updatePassword}
        />
    </div>
  )
}

export default FormHooksRefactor;