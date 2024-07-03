import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTopRated } from '../../redux/actions'
import MovieCard from "./MovieCard/movieCard";

function TopRated() {
    const dispatch = useDispatch()
    const topRatedRedux = useSelector((state) => state.topRated)

    useEffect(() => {
        dispatch(getTopRated())
    }, [dispatch])
  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Top Rated Movies</h1>
    <div>
      {topRatedRedux.listTopRated.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
  )
}

export default TopRated