import Counter from "./components/Counter";
import FocusableInput from "./components/FocusableInput";
import InteractiveWelcome from "./components/InterctiveWelcome";
import ToDoList from "./components/ToDoList";
import UncontrolledLogin from "./components/UncontrolledLogin";
import Color from "./components/Color";
import Colors from "./components/Colors";
import Container from "./components/Container";

function App() {
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
      <Colors colors= {[ { id: 1, name: 'red' },  { id: 2, name: 'blue' }, { id: 3, name: 'green' }, { id: 4, name: 'yellow' }]}/>
      </Container>
    </>
  );
}

export default App;
