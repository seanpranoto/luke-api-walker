import React from "react";

const Content = ({ task, setTasks, i, tasks }) => {

    const onClick = () => setTasks(tasks.filter(task => tasks.indexOf(task) !== i))


    const onChange = () => {
        tasks[i].isComplete=!tasks[i].isComplete;
        if(tasks[i].isComplete===true){
            tasks[i].nameStyle={textDecoration: "line-through"};
        }else{
            tasks[i].nameStyle={textDecoration:""};
        }
        setTasks([...tasks]);
    }

    return (
        <div className="container">
            <h4 style={task.nameStyle}>{task.name}</h4>
            <label htmlFor="checkbox">Completed?</label>
            <input type="checkbox" onChange={onChange} checked={task.isComplete} />
            <button name="delete" className="btn btn-sm btn-danger" onClick={onClick}>X</button>
        </div>
    );
};

export default Content;