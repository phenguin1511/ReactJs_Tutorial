import "./todo.css";


const TodoList = (props) => {
      const { todoList } = props;

      return (
            <>
                  <div className="todo-list">
                        {todoList.length === 0 ?
                              <div className="todo-card">
                                    <div style={{ color: "red" }} className="todo-item">Không có To Do List nào!</div>
                              </div>
                              :
                              todoList.map((item, index) => {
                                    return (
                                          <div key={item.id} className="todo-card">
                                                <div className="todo-item">{item.name}</div>
                                                <button className="todo-delete">Delete</button>
                                          </div>
                                    )
                              })
                        }

                  </div>
            </>
      );

}

export default TodoList;