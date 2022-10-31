import {useState} from "react";
import css from "./CreateTodo.module.css";

const CreateTodo = (props) => {
  const [input, setInput] = useState("")

  const submit = (event) => {
    event.preventDefault();

    props.onAddNewTodo(input);
    setInput("")
  }

  const handleInput = (event) => {
   setInput(event.target.value)
  }

    return (
      <form onSubmit={submit} className={css.wrapper}>
        <input value={input} onChange={handleInput} type="text" placeholder="Enter some todo"/>
        <button>+Add</button>
      </form>
    );
  };
  
  export default CreateTodo;