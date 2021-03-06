import React, {useState, useRef, useContext} from 'react';
import ProgressBar from '../components/progress-bar';
import StarRating from '../components/starrating';
import {TodoContext} from '../context/todo-context';

export default function TodoItem({todo}) {
  
  const [edit, toggleEdit] = useState(false);
  const todoProvider = useContext(TodoContext);
  

  const titleRef = useRef();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      todoProvider.onTodoDelete(todo);
    }
  }

  const handleEdit = (modifiedTodo) => {
    // let title = prompt("Enter new value: ",modifiedTodo.title); 
    // if (!title) return;
    // onTodoEdit(title, todo.id);
    toggleEdit(ps => !ps);
  }

  const toggleTodo = () => {
    todoProvider.onToggleTodo(todo);
  }

  const handleKeyUp = (e) => {
    // enter key = 13
    // esc key = 27
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      todoProvider.onTodoEdit(titleRef.current.value, todo.id);
      toggleEdit(ps => !ps);
    } else if (e.keyCode == 27) {
      // toggleEdit(!edit)
      // toggleEdit(p => {return !p});
      toggleEdit(ps => !ps);
    }
  }

  const toggleBookmark = () => {
    todoProvider.onToggleBookmark(todo);
  }

  const handleRatingChanged = (rating) => {
    todoProvider.onRatingChanged(todo.id, rating);
  }

  let bookmarkClass = todo.bookmarked 
      ? "fas fa-bookmark animate__animated animate__swing" : "far fa-bookmark";

  return (
    <div key={todo.id} className="card todo-item">
      {
        !edit  &&
        <div>
          <span onDoubleClick={toggleTodo} className="todo-title">{todo.title}</span>
          <i onClick={toggleBookmark} 
              className={`p-4 ${bookmarkClass}`}></i>
          <StarRating 
            count={5} 
            value={todo.rating}
            onChange={handleRatingChanged}
          />
        </div>
      }

      {
        edit  &&
        <input onKeyUp={handleKeyUp} ref={titleRef} type="text" defaultValue={todo.title} />
      }

      <div className="d-flex justify-content-between">
        <div>
         {todo.completed 
          ? <span className="badge badge-success">completed</span> 
          : <span className="badge badge-warning">pending</span>}
        </div>
        <div className="d-flex justify-content-between">
          <i onClick={handleDelete} className="p-4 fas fa-trash"></i>
          <i onClick={()=>handleEdit(todo)} 
             className="fas fa-edit p-4"></i>
        </div>
      </div>
      <ProgressBar 
        percent={todo.percentage_completed} 
        width={400}
        height={20}
      />
    </div>
  )
}
