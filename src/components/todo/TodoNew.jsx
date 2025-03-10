import "./todo.css";
import TodoList from "./TodoList";

const TodoNew = () => {
      return (
            <>
                  <div className="todo-form">
                        <input type="text" className="todo-input" />
                        <button className="todo-button">Add</button>
                        <TodoList />
                  </div>
            </>
      );

}

export default TodoNew;