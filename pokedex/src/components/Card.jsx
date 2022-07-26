import React from "react";

const Card = ({ pokemon, buscando }) => {
  return (
    <>
      { 
        buscando ? <h1>BUSCANDO...</h1> :
        pokemon.map((e) => {
            return (
                <div className="card d-flex" key={e.id}>
                    <h2>{e.id}</h2>
                    <img src={e.sprites.front_default} height="200px" width="200px"/>
                    <h1>{e.name}</h1>
                </div>
            )
            
        })}
    </>
  );
};

export default Card;
