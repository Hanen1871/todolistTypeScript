import React from 'react'
import { Todo } from '../App'
interface Props {
    todos:Todo[],
}

const Todolist = ({todos}:Props) => {
  return (
    <div className='todolist'>

{todos.map((el)=> <div className='todo'><h3>{el.todo}</h3> </div>)
}

    </div>
  )
}

export default Todolist