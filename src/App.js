import './App.css';
import Compo from './components/compo';
import Viewer from './compTests/viewer';
import TestTodo from './todoApp/testTodo';
import Todo from './todoApp/todo';

function App() {
  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
      <Todo/>

      {/* <TestTodo/> */}
      {/* <Compo/> */}
    </div>
  );
}

export default App;
