import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateTodo = () => {

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const [activity, setActivity] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/todos/${id}`)
            .then((response) => setActivity(response.data.activity))
    }, [id])

    const onSubmit = (e) => {
        e.preventDefault();
        const activityVar = {   // create activity
            activity: activity,
        };
        console.log(activityVar);
        // post activity to db and return home page
        axios
            .post(`http://localhost:5000/todos/update/${id}`, activityVar)
            .then((res) => { window.location = "/"; });
    };

    return (
        <div>
            <h3>Update Task</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Task:</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Activity Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateTodo;
