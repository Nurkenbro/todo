import css from "./Header.module.css"
import {useState} from "react"


const Header = (props) => {
  const [num, setNum] = useState(0);

  const handlePlus =() => {
    setNum(num + 1)
  }
  const handleDelete =() => {
    setNum(num - 1)
  }

  return (
    <div className={css.wrapper}>
        <h1 className={css.title}>Todos ({props.todoDone} / {props.todoLength})</h1>
      <div>
     <button onClick={handlePlus}>+plus</button>
      <span>{num}</span>
       <button onClick={handleDelete}>-minus</button>
       </div>
       </div>
  
  )
}

export default Header;