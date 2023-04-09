import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import TodoList from "./components/TodosList";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <br />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/create' element={<CreateTodo />} />
          <Route path='/update/:id' element={<UpdateTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
