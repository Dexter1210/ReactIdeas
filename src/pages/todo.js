import React,{useState} from 'react';
import TodoApp from '../features/todo-app';
import TodoForm from '../features/todo-form';
import TodoList from '../features/todo-list';

export default function Todo(){
    const[todos,setTodos]=useState(
        [
            {id:1,title:"Learn C",completed:true},
            {id:2,title:"Learn C++",completed:false},
            {id:3,title:"Learn Java",completed:true},
            {id:4,title:"Learn Ruby on Rails",completed:false},
            {id:5,title:"Learn Go",completed:true}

        ]
    )

    const onTodoAdded=(todoTitle) =>{
        let newTodo={
            title:todoTitle,
            completed:false,
            id: +new Date()
        }
        setTodos([newTodo, ...todos]);
    }

    const onTodoDelete =(todo)=>{
        if(window.confirm("Delete this item ?")){
            let remainingTodos=todos.filter(t=>{
                return t.id !=todo.id
            });
            setTodos([...remainingTodos]);
        }
        
    }

    function onTodoEdit(title,todoId){
        let updatedTodos=todos.map(todo =>{

            if(todo.id==todoId){
                todo.title=title;
            }
            return todo;
        });
        setTodos([...updatedTodos])
    }
    const onToggleTodo=(todo)=>{
        let updatedTodos=todos.map(t=>{
            if(todo.id==t.id){
                todo.completed=!todo.completed;
            }
            return t;
        })
        setTodos([...updatedTodos]);
    }
    return(
        <TodoApp>
        <div className="container-fluid">
            <h1>This is Todo</h1>
            <TodoForm onTodoAdded={onTodoAdded}/>
            <TodoList data={todos}
            onTodoEdit={onTodoEdit}
            onTodoDelete={onTodoDelete}
            onToggleTodo={onToggleTodo}/>
        </div>
        </TodoApp>
    )
}