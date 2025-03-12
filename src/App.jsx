import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { useState } from "react"

const App = () => {
  const [todoList, setValueToDoList] = useState([
    {
      id: 1, name: "Learning React"
    },
    {
      id: 2, name: "Learning NodeJs"
    }
  ])
  const name = "Nguyễn Phúc"
  const data = {
    address: "Biên Hòa",
    phoneNumber: "0337326045"
  }

  const randomID = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewToDo = (name) => {
    if (name) {
      const newTodo = {
        id: randomID(1, 100000),
        name: name
      }
      setValueToDoList([...todoList, newTodo]);
    }
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          name={name}
          data={data}
          addNewToDo={addNewToDo}
          todoList={todoList}
        />
        <div>Learning ReactJS</div>
        <img className="logo" src={reactLogo} alt="React Logo" />

      </div>
    </>
  )
}

export default App
