import React from "react";


const Home = ({ item, color, bgColor }) => {
    console.log({ item });
    if (!item) {
        return (<h1>Welcome</h1>);
    } else {
        if (isNaN(item)) {
            return (<h1 style={color ? { color: color, backgroundColor: bgColor } : null}>The word is: {item}</h1>)
        } else {
            return (<h1>The number is: {item}</h1>)
        }
    }
}


export default Home;