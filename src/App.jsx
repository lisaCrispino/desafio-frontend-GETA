import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [filme, setfilme] = useState();
  const [input, setInput] = useState();
  const refresh = () => window.location.reload(true);

  function nomedofilme(e) {
    setInput(e.target.value);
  }

  function procurarFilme() {
    axios
      .get(`http://www.omdbapi.com/?apikey=80ce30a1&t=${input}`)
      .then((response) => {
        console.log(response.data);
        setfilme(response.data);
      });
    // console.log(filme);
    //props.procurarfilme(filme)
  }

  return (
    
    <div>
      GMDB
      <hr />
      <div className="titulo">
        <h1> GMDB</h1>
        <h2> geta movie database</h2>
        <br />
      </div>
      <div className="search">
        <form />
        <input className="juninho"
          type="text"
          placeholder="insira um filme"
          value={input}
          onChange={nomedofilme}
        />
        <br />
      <div className="buttons">
        <button onClick={procurarFilme}>PESQUISAR</button> <button onClick={refresh}> DELETE</button>
        </div>
      </div>
      {filme && (
        <div className="movie-container">
          <div className="informacao-filme">
            <h1>{filme.Title}</h1>
            <h3>{filme.Plot}</h3>
            <h2>{filme.Actors}</h2>
            <br />
            ★★★☆☆
          </div>
          <div className="postersinho">
            <img src={filme.Poster} alt="poster do filme:)" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
