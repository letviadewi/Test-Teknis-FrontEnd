// MovieModal.jsx

import React from 'react';
import './moviePopUp.css'; // Impor file CSS untuk gaya

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>{movie.title}</h2>
        </div>
        <div className="modal-body">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          {/* Tambahan detail lainnya sesuai kebutuhan */}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
