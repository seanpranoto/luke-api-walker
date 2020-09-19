import React from "react";

const Content = ({state}) => {
    const style={
        margin: "15px 50px",
    }
    return(
        <div style={style}>{state}</div>
    )
}

export default Content;