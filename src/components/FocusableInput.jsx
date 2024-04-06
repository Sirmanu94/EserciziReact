import { useEffect, useRef } from "react";

function FocusableInput() {
  const focusInput = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
        mountedRef.current = true
      console.log("This component is mounted for the first time.");
    } else {
        console.log("mounted again for Debug");
    }
    focusInput.current?.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <>
      <h1> Esercizi sui Ref</h1>
      <p>Quando carichi la pagina il focus è su questo input.</p>
      <form onSubmit={handleSubmit}>
        <input
          ref={focusInput}
          type="text"
          name="username"
          placeholder="username"
        />
        <input type="password" name="password" placeholder="password" />
        <input type="checkbox" name="session" />
        <button>Invia</button>
      </form>
    </>
  );
}

export default FocusableInput;
