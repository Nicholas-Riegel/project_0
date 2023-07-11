import React from 'react'

function MovieLi(x) {

  console.log(x)
  
  const movie = x.movieProp;

  return (
    <li className='movie'>
      <img src={movie.poster} alt={movie.title} />
      <p>
      {movie.title} by {movie.director} was released on {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  )
}

export default MovieLi