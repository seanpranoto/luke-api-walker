import React, {useContext} from "react";
import ContextObject from "./ContextObject"

const Navbar =()=>{
    const h1Style={
        backgroundColor: "purple",
        color: "white",
        padding: "15px 15px 15px 1200px"
    }
    const {state}=useContext(ContextObject);
    return (
        <div>
            <h3 style={h1Style}>Hi {state}</h3>
        </div>
    );
}

export default Navbar;