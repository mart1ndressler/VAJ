import {useState, useEffect} from "react";

async function fetchMovieList() {
  const response = await fetch(`https://swapi.dev/api/films/?format=json`);
  const data = await response.json();
  return data;
}

async function fetchMovieData(movieId) {
  const response = await fetch(
    `https://swapi.dev/api/films/${movieId}/?format=json`
  );
  const data = await response.json();
  return data;
}

export function StarWars() {
  const [movieId, setMovieId] = useState("1");
  const [data, setData] = useState(null);
  const [movies, setMovies] = useState([]);

  // TODO: write an useEffect hook that will call the Star Wars API every time the movie ID changes
  // and updates the `data` state value with the result of the API call
  // You can use the `fetchMovieData` helper to call the API
  useEffect(() => {
    let isCancelled = false;
    fetchMovieData(movieId).then((data) => {if(!isCancelled) setData(data);});
    return () => {isCancelled = true;};
  }, [movieId]);

  useEffect(() => {
    fetchMovieList().then((listData) => {setMovies(listData.results || []);});
  }, []);

  return (
    <div>
      <h1>Star Wars API</h1>
      <select
        value={movieId}
        onChange={(e) => {
          setMovieId(e.target.value);
        }}>
        <option value="1">A New Hope</option>
        <option value="2">Empire Strikes Back</option>
        <option value="3">Return of Jedi</option>

        {movies.map((film) => (
          <option key={film.episode_id} value={film.episode_id}> {film.title} </option>
        ))}
      </select>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}