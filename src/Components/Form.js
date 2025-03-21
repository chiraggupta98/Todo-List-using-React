import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
const Form = (props) => {
  
    let [input,setInput] = useState('')
    
    function inputChangeHandler(e){
        setInput(e.target.value);
    }

    function formSubmitHandler(e){
        e.preventDefault(); //preventing from getting submitted
        const newTodo = {
            id:uuid(),
            todo:input
        }
        props.addTodo(newTodo);
        console.log(input);
        setInput('');
    }

  
  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type='text' placeholder='enter your task' value={input} />
    </form>
  )
}

export default Form