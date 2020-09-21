import React, { useState } from 'react'

export default function TodoForm(prop){
    const[todoTitle,setTodoTitle]=useState("");
    const handleChange=(e) => {
            setTodoTitle(e.target.value)
        
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        if(todoTitle!="")
            prop.onTodoAdded(todoTitle);
        else
            alert("The title can't be empty");
        setTodoTitle("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div class="form-group">
            <input type="text" 
            onChange={handleChange} 
            value={todoTitle}
             placeholder="what do you want want to today?"/>
            </div>
            
            
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
}