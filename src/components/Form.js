import React, { useEffect, useState } from "react";

const Form = ({setPokemons}) => {
    const [data, setData]=useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.json())
            .then(response => setData(response.results))
    }, []);

    const onClick=()=> setPokemons(data);
    
    return (
        <div>
            <button onClick={onClick} >Fetch Pokemon</button>
        </div>
    )
}


export default Form;