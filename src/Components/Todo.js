import React from 'react'
import {BsTrashFill} from 'react-icons/bs';

const Todo = (props) => {

  function deleteTodoHandle(id){
     props.deleteTodo(id);
  }

  return (
    <div>
        <li>
          <p>Index:{props.index} --&gt; ID: {props.id} -- Task:{props.todo} <span onClick={()=>deleteTodoHandle(props.id)}><BsTrashFill/></span></p>
        </li>
    </div>
  )
}

export default Todo