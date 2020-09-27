import React, { useState } from "react";
import { Link } from "@reach/router";

const Form = () => {
    const [id, setId] = useState();
    const [res, setRes] = useState();
    const dropdownInput = { display: "inline-block", margin: "15px" };
    const button = { backgroundColor: "blue", borderRadius: "5px", color: "white", padding: "5px 10px" };
    const onSubmit = e => {
        e.preventDefault();
    }
    const onChange = (e) => {
        setId(e.target.value);
    }
    const onClick = (e) => setRes(e.target.value);
    let link = `/${res}/${id}`;
    return (
        <form onSubmit={onSubmit} >
            <label htmlFor="dropdownMenuButton">Search for: </label>
            <div style={dropdownInput} className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {res}
            </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button onClick={onClick} style={dropdownInput} value="people">People</button>
                    <button onClick={onClick} style={dropdownInput} value="planets">Planets</button>
                    <button onClick={onClick} style={dropdownInput} value="starships">Starships</button>
                </div>
            </div>
            <label htmlFor="ID">ID:</label>
            <input type="text" name="ID" style={dropdownInput} onChange={onChange} />
            <Link to={link}><button style={button}>Search</button></Link>
        </form>
    );
}

export default Form;