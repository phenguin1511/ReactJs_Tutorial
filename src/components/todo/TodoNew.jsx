import "./todo.css";
import TodoList from "./TodoList";

const TodoNew = (props) => {

      const { data, name } = props;
      return (
            <>
                  <div>
                        <h1>{name}</h1>
                        <p>{data.address}</p>
                        <p>{data.phoneNumber}</p>
                  </div>
                  <div className="todo-form">
                        <input type="text" className="todo-input" />
                        <button className="todo-button">Add</button>
                        <TodoList />
                  </div>
            </>
      );

}

export default TodoNew;