import React, { useState } from "react";
import axios from "axios";

const CreateTodo = () => {
    const [activity, setActivity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const activityVar = {   // create activity
            activity: activity,
        };
        console.log(activityVar);
        // post activity to db and return home page
        axios
            .post("http://localhost:5000/todos/add", activityVar)
            .then((res) => { window.location = "/"; });
    };

    return (
        <div>
            <h3>Create New Task</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Task: </label>
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
                        value="Create Activity Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateTodo;
