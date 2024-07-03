import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcoming } from "../../redux/actions";
import MovieCard from "./MovieCard/movieCard";

function UpComing() {
  const dispatch = useDispatch();
  const upcomingRedux = useSelector((state) => state.upcoming);

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);
  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Upcoming Movies</h1>
    <div>
      {upcomingRedux.listUpcoming.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
  );
}

export default UpComing;
