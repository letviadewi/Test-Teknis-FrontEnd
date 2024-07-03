import React, { useState } from "react";
import "./movieCard.css"; // Impor file CSS untuk gaya
import MovieModal from "../MoviePopUp/moviePopUp";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="movie-poster-container">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-title">{movie.title}</div>

      <div className="button" onClick={openModal}>
        View Details
      </div>

      {showModal && <MovieModal movie={movie} onClose={closeModal} />}
    </div>
  );
};

export default MovieCard;
