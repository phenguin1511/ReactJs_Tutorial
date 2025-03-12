import "./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import "./App.css"

const App = () => {

  const name = "Nguyễn Phúc"
  const data = {
    address: "Biên Hòa",
    phoneNumber: "0337326045"
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          name={name}
          data={data}
        />
        <div>Learning ReactJS</div>
        <img className="logo" src={reactLogo} alt="React Logo" />

      </div>
    </>
  )
}

export default App
