import React, {useContext} from "react";
import Contextobject from "./ContextObject";


const Form = () => {
    const {setState} =useContext(Contextobject);
    const onChange=(e)=> setState(e.target.value);
    const labelStyle={
        marginRight: "10px",
        fontSize: "25px"
    }
    const inputStyle={
        backgroundColor: "#efefef",
        borderRadius: "7px"
    }
    return (
        <div>
            <label style={labelStyle } htmlFor="name"> <b> Your name: </b></label>
            <input style={inputStyle} type="text" name="name" onChange={onChange}/>
        </div>
    )
}


export default Form;