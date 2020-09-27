import React, {useState, useEffect} from "react";
import axios from "axios";
import {navigate} from "@reach/router";

const People=({id})=>{
    const [content, setContent]=useState({});
    const [homeworld, setHomeworld]= useState("");
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res);
                setContent(res.data);
            })
            .catch(err => navigate("/obiwan"))
    }, [id]);
    useEffect(()=>{
        axios.get(content.homeworld)
        .then(res=>setHomeworld(res.data.name))
    })
        return (
            <>
                <h1>{content.name}</h1>
                <p>Birth Year: {content.birth_year}</p>
                <p>Gender: {content.gender}</p>
                <p>Hair color: {content.hair_color}</p>
                <p>Height: {content.height} </p>
                <p>Homeworld: {homeworld}</p>
                <p>Link: <a href={content.homeworld}>Homeworld</a></p>
            </>
        )
}

export default People;