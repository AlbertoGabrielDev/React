import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from "./api";
import './Pokemon.css';

const Pokemon = () => {
  
  const [pokemonDate, setPokemonDate] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  useEffect(() => {
    obterDatos()
  }, [url]);

  const obterDatos = async () => {
    const resultado = await axios.get(url)
    console.log("Infomacoes: ", resultado)
    setNextUrl(resultado.data.next);
    setPrevUrl(resultado.data.previous);
    console.log("Lista de Pokemons: ", resultado.data.results);
    obterPokemon(resultado.data.results)
    setPokemon(resultado.data.results)
  }

  const obterPokemon = async (res) => {
    res.map(async (selecionado) => {
      const result = await axios.get(selecionado.url)
      console.log("Selected: ", selecionado.name, "...", result)
      setPokemonDate(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }

  return (
    <>

      <div className="conteiner">
        <input className="pokemon_search" type="search" value={pokemon} placeholder="Buscar por Pokemon" onChange={(e) => setPokemon(e.target.value)} />

        < button className="botao" >Pesquisar</button>
        </div>
        <div className='cartao'>
        {
            pokemon.map((item) => {
              return(
                <div >
                <h2>{item.id}</h2>
                
              </div>
              )
            })
            
          }
          </div>
      
    </>
  );
}

export default Pokemon;