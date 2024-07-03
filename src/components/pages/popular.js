import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopular } from "../../redux/actions";
import MovieCard from "./MovieCard/movieCard";
import Navbar from "../navbar";

function Popular() {
  const dispatch = useDispatch();
  const popularRedux = useSelector((state) => state.popular);

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign: 'center'}}>Popular Movies</h1>
      <div>
        {popularRedux.listPopular.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
