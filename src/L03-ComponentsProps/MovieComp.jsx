import React from 'react'
import movieArray from './Data/movieArray'
import MovieLi from './MovieLi';

// usually will get data with an api call, so use this
const fetchMovies = () => {
  return movieArray;
}
    
const MovieComp = () => {

  const name = 'Jack';

  // console.log(<MovieLi key={4} nameProp={name}/>)

  return (
    <div className='movie-container'>
      <h2>Movies List</h2>
      <ul className='movie-list'>
        {fetchMovies().map((movie, i) => (
              <MovieLi 
                key={i} // key is not passed as a prop. it is for this element
                movieProp={movie}
                nameProp={name}
              />
            )
          )
        }
      </ul>
    </div>
  )
}

export default MovieComp