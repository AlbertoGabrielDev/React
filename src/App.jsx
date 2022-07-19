import React,{useState} from 'react';
import './App.css';
import './components/Buscador.css';
import api from './components/api';


function App() {
  const [busca, setBusca] = useState('');
 

async function buscador(){
  if(busca === ''){
    alert("ERRO")
  }
  try {
    const response = await api.get(`${busca}/json`);
    //console.log(response)
    setBusca(response.data);
    
  } catch {
    alert("Erro ao buscar");
  }
}


  return (
    <div className="App">
        <div className="cep">
        <h1>Buscador de CEP</h1>
         <input 
    type="search"  
    placeholder="Digite seu cep"
      value={busca}
       onChange = {(e)=>setBusca(e.target.value) } //pegar o valor e passa pro useState busca
    />
    <ul className='conteudo'>
        <li>CEP:{busca.cep}</li>
        <li>Bairro: {busca.bairro}</li>
        <li>UF:{busca.uf}</li>
        <li>Localidade:{busca.localidade}</li>

      </ul>

        < button className="botao" onClick={buscador}>Pesquisar</button>
        </div>

      


    </div>
  );
}

export default App;
