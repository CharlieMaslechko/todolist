import React from 'react';
import Todo from './Todo.js'

const TodoList = ({setTodos, todos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;