import "./styles.css";
import { useCallback, useState } from "react";
import Todos from "./Components/Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [Todo, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos([...Todo, "Add New Todo"]);
  }, [Todo]);
  const countUp = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="App">
      <Todos todos={Todo} addTodo={addTodo} />
      <h1>{count}</h1>
      <button onClick={countUp}>+</button>
    </div>
  );
}
