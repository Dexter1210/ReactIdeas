import React from 'react'

export default function TodoItem({todo,onTodoDelete}){

    const handleDelete= () =>{
        onTodoDelete(todo);
    }
    return(

        <div key={todo.id} className="album py-5 bg-light">
            <div className="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card body">
                            <h4 class="card-text">{todo.title}
                             <i onClick ={handleDelete} class="fas fa-trash"></i>
                            </h4>

                            <div>
                             {todo.completed ? <span className="badge badge-success">completed</span>
                                :<span className="badge badge-warning">pending</span> }
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
           
        </div>
    )
}
