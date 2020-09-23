import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = ({setPokemons}) => {

    const [data, setData]=useState(null);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => setData(response.data.results))
            .catch(err=>console.log(err))
    }, []);

    const onClick=()=> setPokemons(data);
    
    return (
        <div>
            <button onClick={onClick} >Fetch Pokemon</button>
        </div>
    )
}


export default Form;