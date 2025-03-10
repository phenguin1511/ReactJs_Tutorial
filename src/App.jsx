import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import "./App.css"

const App = () => {


  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <div>Learning ReactJS</div>
        <img className="logo" src={reactLogo} alt="React Logo" />

      </div>
    </>
  )
}

export default App
