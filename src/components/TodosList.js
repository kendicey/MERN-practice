import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = (props) => {
    return (
        <tr className="d-flex">
            <td className='col-10'>{props.todo.activity}</td>
            <td className='col-2' style={{ textAlign: "right" }}>
                <button onClick={() => { props.deleteTodo(props.todo._id) }} >delete</button>
                <button onClick={() => { props.doneTodo(props.todo._id) }}>done</button>
                <button onClick={() => { props.updateTodo(props.todo._id) }}>update</button>
            </td>
        </tr>
    )
}

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/todos')
            .then(response => { setTodos(response.data); })
            .catch((err) => { console.log(err); })
    }, [])

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/todos/${id}`)
            .then(response => {
                console.log(response.data);
                setTodos(todos.filter(el => el._id !== id));
            })
    }

    const doneTodo = async (id) => {
        try {
            const targetTodo = { activity: `${todos.find(todo => todo._id === id).activity}` };
            await axios.put(`http://localhost:5000/todos/done/${id}`, targetTodo);
            const response = await axios.get('http://localhost:5000/todos');
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateTodo = (id) => {
        window.location = "/update/" + id;
    }

    const TodoList = () => {
        return todos.map(currenttodo => {
            return <Todo todo={currenttodo} deleteTodo={deleteTodo} doneTodo={doneTodo} updateTodo={updateTodo} key={currenttodo._id} />
        })
    }

    return (
        <div>
            <h3>Logged Todos</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {TodoList()}
                </tbody>
                <tbody><a> </a></tbody>
            </table>
        </div>
    )
}

export default TodoList;