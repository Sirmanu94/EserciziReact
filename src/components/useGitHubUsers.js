import { useState } from "react";

export function useGitHubUsers(){
        const [username, setUsername] = useState("");
        const [users, setUsers] = useState([]);
        const loading = false
      
        const handleChange = (event) => {
          setUsername(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setUsers([...users, username]);
          setUsername("");
        };

        return {
            username,
            users,
            handleChange,
            handleSubmit,
            loading
        }

}

