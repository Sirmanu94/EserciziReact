import React, { useState } from "react";
import GitHubUser from "./GitHubUser";
import { useGitHubUsers } from "./useGitHubUsers";

function GithubUsers() {

  const { username, users, handleChange, handleSubmit} = useGitHubUsers()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Inserisci un username GitHub"
        />
        <button type="submit">Cerca</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <GitHubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUsers;
