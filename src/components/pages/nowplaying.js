import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaying } from "../../redux/actions";
import Navbar from "../navbar"
import MovieCard from "./MovieCard/movieCard";

// Komponen Nowplaying untuk menampilkan deretan film
const Nowplaying = () => {
  const dispatch = useDispatch();
  const playingRedux = useSelector((state) => state.now_playing);

  useEffect(() => {
    dispatch(getPlaying());
  }, [dispatch]);

  console.log("dari pages", playingRedux.listPlaying);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Now Playing Movies</h1>
      <div>
        {playingRedux.listPlaying.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Nowplaying;
