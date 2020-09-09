import React, {Component} from "react";
import styles from "./MyStyle.module.css"

class Main extends Component{
    render(){
        return (<div id={styles.main}>
            {this.props.children}
        </div>
        );
    }
}

export default Main;