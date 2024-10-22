import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import Todolist from './Components/Todolist';
export interface Todo{
  id:number
  todo: string,
}

const App:React.FC=()=> {
  const [todo, settodo] = useState<string>("")
  console.log(todo)
  const [todos, settodos] = useState<Todo[]>([])
  return (
    <div className="App">
      <h1>Todo app</h1>
    
      <InputField todo={todo} settodo={settodo} todos={todos} settodos={settodos}/>
    <Todolist todos={todos}/>
    </div>
  );
}

export default App;
