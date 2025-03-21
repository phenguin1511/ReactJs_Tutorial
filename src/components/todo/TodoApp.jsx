import { useState } from "react";
import TodoNew from './TodoNew';

import reactLogo from '../../assets/react.svg'

const TodoApp = () => {
      const [todoList, setValueToDoList] = useState([
      ])

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
                              addNewToDo={addNewToDo}
                              todoList={todoList}
                              setValueToDoList={setValueToDoList}
                        />

                        {todoList.length === 0 ? <img className="logo" src={reactLogo} alt="React Logo" /> :
                              <div>Learning ReactJS</div>
                        }
                  </div>
            </>
      )
}

export default TodoApp;