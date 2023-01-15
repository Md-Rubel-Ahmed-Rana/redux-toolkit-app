import './App.css';
import Counter from './features/counter/Counter';
import Todos from './features/todos/Todos';
import Users from './features/users/Users';

function App() {
  return (
    <div>
      <div className="App">
        <Counter />
        <Todos />
      </div>
      <div>
        
        <Users />
      </div>
    </div>
  );
}

export default App;
