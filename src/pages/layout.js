import React from 'react';

import{
    NavLink
}from 'react-router-dom';

export default function Layout(){
    return(
        <nav className="navbar navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/counter">Counter</NavLink>
        </nav>

    )
}