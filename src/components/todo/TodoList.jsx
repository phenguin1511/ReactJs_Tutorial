import "./todo.css";


const TodoList = () => {
      return (
            <>
                  <div className="todo-list">
                        <div className="todo-card">
                              <div className="todo-item">Learn ReactJS</div>
                              <button className="todo-delete">Delete</button>
                        </div>
                        <div className="todo-card">
                              <div className="todo-item">Learn ReactJS</div>
                              <button className="todo-delete">Delete</button>
                        </div>
                        <div className="todo-card">
                              <div className="todo-item">Learn ReactJS</div>
                              <button className="todo-delete">Delete</button>
                        </div>
                  </div>
            </>
      );

}

export default TodoList;