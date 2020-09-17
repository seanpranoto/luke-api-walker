import React, { useState } from "react";

const Form = ({ state, setState }) => {
    const [color, setColor] = useState("");
    const onChange = (e) => setColor(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            array: [...state.array, color]
        });
        setColor("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="color" onChange={onChange} value={color} placeholder="Color" />
            <button>Submit</button>
        </form>
    );
}


export default Form;