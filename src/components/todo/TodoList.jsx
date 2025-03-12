import "./todo.css";


const TodoList = (props) => {
      const { todoList } = props;

      return (
            <>
                  <div className="todo-list">
                        {todoList.map((item, index) => {
                              return (
                                    <>
                                          <div className="todo-card">
                                                <div className="todo-item">{item.name}</div>
                                                <button className="todo-delete">Delete</button>
                                          </div>
                                    </>
                              )
                        })}

                  </div>
            </>
      );

}

export default TodoList;