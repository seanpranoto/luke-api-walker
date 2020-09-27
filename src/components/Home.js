import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const Home = ({ search, id, }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${search}/${id}`)
            .then(res => {
                console.log(res);
                setContent(res.data);
            })
            .catch(err => navigate("/obiwan"))
    }, [search, id]);
    if (search === "planets") {
        return (
            <>
                <h1>{content.name}</h1>
                <p>Climate: {content.climate}</p>
                <p>Diameter: {content.diameter}</p>
                <p>Orbital period: {content.orbital_period}</p>
                <p>Terrain: {content.terrain}</p>
            </>
        )
    }
    else if (search === "starships") {
        return (
            <>
                <h1>{content.name}</h1>
                <p>Manufacturer: {content.manufacturer}</p>
                <p>Crew: {content.crew}</p>
                <p>Length: {content.length}</p>
                <p>Passengers: {content.passengers}</p>
            </>
        )
    }


}


export default Home;