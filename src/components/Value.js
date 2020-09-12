import React from "react";

const Value=(props)=>{
    const {firstName, lastName, email, password, confirmPassword} =props.state;
    return(
        <>
        <p>First name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </>
    );
}

export default Value;