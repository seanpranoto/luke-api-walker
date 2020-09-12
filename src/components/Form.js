import React from "react";

const Form = (props) => {
    const { state, setState } = props;
    const onChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

    return (
        <form>
            <div className="form-block">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={onChange} />
            </div>
            <div className="form-block">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={onChange} />
            </div>
            <div className="form-block">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={onChange} />
            </div>
            <div className="form-block">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={onChange} />
            </div>
            <div className="form-block">
                <label htmlFor="confrimPassword">Confrim Password</label>
                <input type="password" name="confirmPassword" onChange={onChange} />
            </div>
        </form>
    );
}

export default Form;