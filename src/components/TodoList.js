import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(
                        (eachTodo) => (
                            <Todo 
                                key={eachTodo.id}
                                eachTodoText={eachTodo.text}
                                eachTodo={eachTodo}
                                todos={todos}
                                setTodos={setTodos}
                                filteredTodos={filteredTodos}/>
                        ))
                }
            </ul>
        </div>
    )
}

export default TodoList;