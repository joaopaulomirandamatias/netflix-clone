import Tmdb from "./Tmdb";
import React, {useEffect, useState} from "react";
import MovieRow from "./components/MovieRow";
import './App.css'


export default () => {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMoviesList(list);
    }
    loadAll();
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {moviesList.map((item, key) => (
         <MovieRow key={key} title={item.title} items={item.items}  />
        ))}
      </section>
    </div>
  );
}