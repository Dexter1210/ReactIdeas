import React from 'react';

import{
    NavLink
}from 'react-router-dom';

export default function Layout(){
    return(
        <nav className="navbar navbar-dark bg-primary">
             
            <NavLink className="navbar-brand" to="/"><i class="fas fa-house-user"></i>Home</NavLink>
            <NavLink className="navbar-brand" to="/todo"><i class="fas fa-clipboard-list"></i>To do</NavLink>
            <NavLink className="navbar-brand" to="/counter"><i class="fas fa-stopwatch"></i>Counter</NavLink>
            <NavLink className="navbar-brand" to="/multiple-state-update">Multiple state update</NavLink>
            <NavLink className="navbar-brand" to="/multiple-state-update-props">Multiple state update props</NavLink>
            <NavLink className="navbar-brand" to="/use-effect-demo"><i class="fab fa-audible"></i>Use Effect Demo</NavLink>
        </nav>

    )
}