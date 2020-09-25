import React from 'react';

const Todo = ({eachTodoText, eachTodo, todos, setTodos, filteredTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== eachTodo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === eachTodo.id){
                return{
                    ...item, completed: !item.completed
                };
            } 
            return item;
        }))};
    return(
        <div className='todo'>
            <li className={`todo-item ${eachTodo.completed ? "completed": "" }`}>{eachTodoText}</li>
            <button onClick={completeHandler} className='complete-btn'>
              <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className='complete-btn'>
            <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;