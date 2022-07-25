import React,{useState} from 'react';
import Pokemon from './components/Pokemon';

function App() {
  return(
    <Pokemon/>
  )


  // const [pokemon, setPokemon] = useState("");
  

  // async function buscador(){
  //   const response = await api.get(`${pokemon}`)
  // //  console.log(response)
  //  setPokemon(response.data);
  // }

  // return (
  //   <div className="App">
  //     <div className="pokemon_search"></div>
  //     <h1 className='nome'>Buscar Pokemon:</h1>
  //     <input type="search" value={pokemon} onChange = {(e)=>setPokemon(e.target.value) } />
  //     <div className='conteudo'>
  //       <li className='nome'>Nome:{pokemon.name}</li>
  //       <li className='nome'>Peso:{pokemon.weight}</li>
  //        {/* <img src= {pokemon.sprites.front_default} alt={pokemon.name}/>  */}
  //     </div>
  //     < button className="botao" onClick={buscador}>Pesquisar</button>
  //   </div>
  // );
}

export default App;
