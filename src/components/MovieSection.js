import React from "react";
import "./MovieSection.css";

const MovieSection = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt="movie-pic"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
