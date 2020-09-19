import React from "react";

const Tabs = (props) => {
    const { setState}=props;

    const buttonStyle={
        display: "inlineBlock",
        marginLeft: "50px",
        width: "150px",
    }
    const onClick=(e)=>{
        if(e.target.name==="tab1"){
            setState(<p>Tab 1 content is showing here</p>)
        }else if(e.target.name==="tab2"){
            setState(<p>Tab 2 content is showing here</p>)
        }else{
            setState(<p>Tab 3 content is showing here</p>)
        }
    }
    
    return (
        <div>
            <button style={buttonStyle} name="tab1" onClick={onClick}>Tab 1</button>
            <button style={buttonStyle} name="tab2" onClick={onClick}>Tab 2</button>
            <button style={buttonStyle} name="tab3" onClick={onClick}>Tab 3</button>
        </div>
    );
}


export default Tabs;