import "./components/todo/todo.css"
import TodoApp from "./components/todo/TodoApp"
import HeaderPage from "./components/layouts/header"
import FooterPage from "./components/layouts/footer"
import { Outlet } from "react-router-dom"
const App = () => {

  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  )
}

export default App
