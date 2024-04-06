import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handleChange(e) {
    setData((data) => {
      const name = e.target.name;
      const value = e.target.value;
      const checked = e.target.checked;
      const type = e.target.type;
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin(e){
    e.preventDefault();
    console.log(data);
  }

  function handleReset(){
setData({
    username: "",
    password: "",
    session: false,
  });
  }
  return (
    <>
    <h1>Controlled Forms</h1>
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={data.username}
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <input
        type="password"
        value={data.password}
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <input
        type="checkbox"
        checked={data.session}
        name="session"
        onChange={handleChange}
      />

      <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}

export default Login;
