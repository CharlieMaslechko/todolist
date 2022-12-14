import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header> 
        <h1> Charlie's Todo List </h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos}/>
      <TodoList setTodos={setTodos} todos={todos}/>
     
    </div>
  );
}

export default App;
