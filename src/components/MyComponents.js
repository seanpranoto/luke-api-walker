import React, {Component} from "react";

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={ageUp: this.props.age};
    }
    render(){
        const {firstName, lastName,color}=this.props;
        return(
            <>
            <h1>{firstName}, {lastName} </h1>
            <p>Age: {this.state.ageUp} </p>
            <p>Hair color: {color}</p>
            <button onClick={()=>this.setState({ageUp: this.state.ageUp+1})}>Button for {firstName} {lastName}</button>
            </>
        )
    }
}

export default MyComponent;