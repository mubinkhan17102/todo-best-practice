import './App.scss';
import Header from "./components/Header";
import { TodoContainer } from "./containers/todoContainer/TodoContainer";
function App() {
  return (
    <>
      <Header/>
      <TodoContainer/>
    </>
  );
}

export default App;
