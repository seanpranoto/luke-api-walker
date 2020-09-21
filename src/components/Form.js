import React, { useState } from "react";

const Form = (props) => {
    const { tasks, setTasks } = props;
    const [list, setList] = useState({
        name: "",
        isComplete: false,
        nameStyle:{}
    });

    const onSubmit = (e) => {
        // Prevent default behaviour
        e.preventDefault();
        //Giving a value to the state in app.js
        setTasks([...tasks, list]);
        // Reset the input value
        setList({...list, name:""});

    }

    const onChange = (e) => setList({ ...list, name: e.target.value });


    const addButtonStyle = {
        width: "100px",
    }

    return (
        <form className="container" onSubmit={onSubmit} >
            <input type="text" onChange={onChange} value={list.name} />
            <button className="btn btn-primary btn-block" style={addButtonStyle}>Add</button>
        </form>
    );
}


export default Form;