import React from 'react';
import useLoginForm from './useLoginForm';

function LoginForm() {
  const { username, password, handleUsernameChange, handlePasswordChange } = useLoginForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fai qualcosa con username e password, come inviarli al server
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Invia</button>
    </form>
  );
}

export default LoginForm;

// 1) Utilizziamo iil custom Hook, che ritorna appunto l'username, la password e le funzioni per settare i due valori.
// 2) Creiamo una funzione handle Submit che farà qualcosa non appena il form sarà inviato.
// 3)Nel form  creiamo i due input con value username e password. all'evento onchange gli passiamo la funzione che setterà username e password.
// 4)All' invio del form, partirà la funzione handle sumbit. che in questo caso stamperà in console i valori di username e password.