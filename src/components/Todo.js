import React from 'react'

const Todo = ({text, key, setTodos, todos, todo}) => {
    const deleteHandler = (e) => {
        console.log("RAN");
        setTodos(todos.filter((currentTodo) => currentTodo.id !== todo.id));
    }
    return (
        <div className = "todo">
            <li className="todo-item"> { text }</li>
            <button className="complete-btn">
                <i className="fas fa-check"> 
                </i>
            </button>  
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"> 
                </i>
            </button> 
        </div>
    );
}

export default Todo;