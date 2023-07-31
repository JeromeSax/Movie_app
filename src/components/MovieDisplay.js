import React from 'react'

function MovieDisplay({movie}) {
    
    const loaded =() => {
  return (
    <div>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>Year: {movie.Year}</h2>
        <h2>Rated: {movie.Rated}</h2>
        <h2>Plot: {movie.Plot}</h2>
        <h2>Rating: {movie.Ratings[1].Value}</h2>
        <h2>Actors: {movie.Actors}</h2>
    </div>
  );
};

const loading = () => {
    return <h1>No Movie to Display</h1>
}

return movie? loaded() : loading()
}

export default MovieDisplay
