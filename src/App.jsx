import Counter from "./components/Counter";
import FocusableInput from "./components/FocusableInput";
import InteractiveWelcome from "./components/InterctiveWelcome";
import ToDoList from "./components/ToDoList";
import UncontrolledLogin from "./components/UncontrolledLogin";
import Color from "./components/Color";
import Colors from "./components/Colors";
import Container from "./components/Container";
import Clock from "./components/Clock";
import LanguageContext from "./components/LanguageContext";
import { useState } from "react";
import GitHubUser from "./components/GitHubUser";
import GitHubUsers from "./components/GitHubUsers";
import HookCounter from "./components/HookCounter";
import LoginForm from "./LoginForm";
import LocationComponent from "./LocationComponent";

function App() {
  const [language, setLanguage] = useState("en");
  function changeLanguage(language) {
    setLanguage(language);
  }

  return (
    <>
      <Container title={<h1>Our Collapsable component.</h1>}>
        <InteractiveWelcome />

        <UncontrolledLogin />
        <hr />
        <FocusableInput />
        <hr />
        <Counter />
        <hr />
        <ToDoList />
        <hr />
        <Color color={{ id: 1, name: "Jhon" }} />
        <hr />
        <Colors
          colors={[
            { id: 1, name: "red" },
            { id: 2, name: "blue" },
            { id: 3, name: "green" },
            { id: 4, name: "yellow" },
          ]}
        />
      </Container>
      <hr />
      <LanguageContext.Provider value={language}>
        <button onClick={() => changeLanguage("it")}>IT</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <Clock />
      </LanguageContext.Provider>
      <hr />
      <h1>Esercizio Fetch</h1>
      <GitHubUser username="gianmarcotoso" />
      <hr />
      <GitHubUsers />
      <hr />
      <h3>Hook Personalizzato</h3>
      <HookCounter/>
      <hr />
      <h3>Form controllato con Hook Personalizzato</h3>
      <LoginForm/>
      <hr />
      <h3>Geolocalizzazione </h3>
      <LocationComponent/>

    </>
  );
}

export default App;
