import { useState } from "react";
import "./todo.css";
import TodoList from "./TodoList";

const TodoNew = (props) => {
      const { data, name, addNewToDo, todoList } = props;
      const [inputValue, setInputValue] = useState(""); // State để lưu giá trị input

      // Hàm xử lý khi nhập dữ liệu vào ô input
      const handleInputChange = (event) => {
            setInputValue(event.target.value);
      };

      // Hàm thêm todo mới
      const addNewToDoList = () => {
            if (inputValue.trim() !== "") { // Kiểm tra xem có nhập dữ liệu không
                  addNewToDo(inputValue);
                  setInputValue("");
            }
      };
      return (

            <>
                  <div>
                        <h1>{name}</h1>
                        <p>{data.address}</p>
                        <p>{data.phoneNumber}</p>
                  </div>
                  <div className="todo-form">
                        <input
                              type="text"
                              className="todo-input"
                              value={inputValue}
                              onChange={handleInputChange}
                        />
                        <button onClick={addNewToDoList} className="todo-button">
                              Add
                        </button>
                        <div>{inputValue}</div>
                        <TodoList
                              todoList={todoList}
                        />
                  </div>
            </>
      );
};

export default TodoNew;