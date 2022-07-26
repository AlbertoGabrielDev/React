import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import Card from "./Card";

const Pokemon = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonDate, setPokemonDate] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  useEffect( () => {
    obterDatos();
  }, [url] );

  const obterDatos = async() => {
    setLoading(true);
    const resultado = await axios.get(url);
    setNextUrl(resultado.data.next);
    setPrevUrl(resultado.data.previous);
    obterPokemon(resultado.data.results);
    setLoading(false);
  };

  const obterPokemon = async(res) => {
    res.map( async(selecionado) => {

      const result = await axios.get(selecionado.url);

      setPokemonDate( event => {
        event = [...event, result.data];
        event.sort( (a, b) => a.id > b.id ? 1 : -1 );
        return event;
      });

    });
  };

  return (
    <>
      <Card 
        pokemon = {pokemonDate}
        buscando = {loading}
      />
    </>
  );
};

export default Pokemon;
