import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 68bfdc84
const API_URL = "http://www.omdbapi.com/?apikey=68bfdc84";



const App = () => {
  const [Movies, setMovies] = useState([]);
  const [SearchItem, setSearchItem] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {searchMovies("Ironman");}, 
  
  []);
  return (
    <div className="app">
      <h1>Flixify</h1>
      <div className="search">
        <input
          value={SearchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          placeholder="Search for movies"
        />

        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(SearchItem)}
        />
      </div>

      {Movies?.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
