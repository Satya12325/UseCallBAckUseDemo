import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child is render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
