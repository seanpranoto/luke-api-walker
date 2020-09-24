import React, { useState } from "react";
import ContextObject from "./ContextObject"

const Wrapper = ({children}) => {
    const [state, setState]=useState("")
    return (
        <ContextObject.Provider value={{state, setState}}>
            {children}
        </ContextObject.Provider>
    );
};

export default Wrapper;