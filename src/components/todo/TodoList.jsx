import "./todo.css";


const TodoList = (props) => {
      const { todoList, setValueToDoList } = props;

      const deleteToDo = (id) => {
            const updateList = todoList.filter(item => item.id !== id);
            setValueToDoList(updateList);
      }
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
                                                <button onClick={() => deleteToDo(item.id)} className="todo-delete">Delete</button>
                                          </div>
                                    )
                              })
                        }

                  </div>
            </>
      );

}

export default TodoList;