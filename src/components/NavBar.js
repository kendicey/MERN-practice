import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Todo List Maker</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Add A Task</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;