import Header from "./components/Header";
import { TodoContainer } from "./containers/todoContainer/TodoContainer";
import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <TodoContainer/>
    </>
  );
}

export default App;
