import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/create-todo/CreateTodo";
import Header from "./components/header/header";
import TodoItem from "./components/todo-item/TodoItem";

const InitialState = JSON.parse(localStorage.getItem("todos")) || [];
function App() {
  const [todos, setTodos] = useState(InitialState);

  useEffect(() => {
    console.log("hello from effect");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const onAddNewTodo = (str) => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }]);
  };

  const onStatusChange = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const onEdit = (id, newText) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const newTodos = todos.map((item) => (
    <TodoItem
      id={item.id}
      text={item.text}
      status={item.status}
      onDelete={onDelete}
      onStatusChange={onStatusChange}
      onEdit={onEdit}
    />
  ));

  const todoCompletes = todos.reduce(
    (akk, item) => akk + Number(item.status),
    0
  );
  return (
    <div className="App">
      <Header todoLength={todos.length} todoDone={todoCompletes} />
      <div className="content">
        <CreateTodo onAddNewTodo={onAddNewTodo} />
        <div className="content_body">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
