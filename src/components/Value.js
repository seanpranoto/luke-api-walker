import React from "react";

const Content = ({ pokemons }) => {
    return(
        <div>
            <ol>
            {
                pokemons.map((pokemon)=><li>{pokemon.name}</li>)
            }
            </ol>
        </div>
    )
};

export default Content;