import React, {Component} from "react";
import StyledBox from "./StyledComponents"

class Main extends Component{
    render(){
        return (<StyledBox bgColor="#e06666" display="inline-block" verticalAlign="top">
            {this.props.children}
        </StyledBox>
        );
    }
}

export default Main;