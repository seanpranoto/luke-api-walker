import React from "react";

const Form = (props) => {
    const { input, setInput } = props;
    const onChange = (e) => setInput({ ...input, [e.target.name]: e.target.value });
    return (
        <form>
            <div className="form-block">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={onChange} />
            </div>
            {
                input.firstName.length < 2 ?
                    <h3>Field must be at least 2 characters</h3> :
                    null
            }
            <div className="form-block">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={onChange} />
            </div>
            {
                input.lastName.length < 2 ?
                    <h3>Field must be at least 2 characters</h3> :
                    null
            }
            <div className="form-block">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={onChange} />
            </div>
            {
                input.email.length < 5 ?
                    <h3>Field must be at least 5 characters</h3> :
                    null
            }
            <div className="form-block">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={onChange} />
            </div>
            <div className="form-block">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" onChange={onChange} />
                {
                    input.password.length < 8 ?
                        <h3>Field must be at least 8 characters</h3> :
                        null
                }
                {
                    input.password !== input.confirmPassword ?
                        <h3>Password must match</h3> :
                        null
                }
            </div>
        </form>
    )
}

export default Form;