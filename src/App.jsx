import Counter from "./components/Counter";
import FocusableInput from "./components/FocusableInput";
import InteractiveWelcome from "./components/InterctiveWelcome";
import ToDoList from "./components/ToDoList";
import UncontrolledLogin from "./components/UncontrolledLogin";
import Color from "./components/Color";
import Colors from "./components/Colors";

function App() {
  return (
    <>
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
      <Colors colors= {[ { id: 1, name: 'red' },  { id: 2, name: 'blue' }, { id: 3, name: 'green' }, { id: 4, name: 'yellow' }]}/>
    </>
  );
}

export default App;
