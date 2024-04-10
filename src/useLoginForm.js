import { useState } from 'react';

function useLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
  };
}

export default useLoginForm;


// Creiamo la funzione useLoginForm che sarà un customHook.
// che ritornerà un oggetto che avrà come proprietà, il valore dell'username, il valore della password, e le funzioni che serveranno a raccogliere quel valore
// all'interno dello state.

// Queste funzioni saranno passate all'evento onChange degli input, in modo da tenere traccia di ciò che sarà scritto