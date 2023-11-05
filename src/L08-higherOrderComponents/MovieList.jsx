import withFetch from './WithFetch'

const MovieList = (props) => {
  
  const {movies} = props;
  
  return (
    <div>
      <h2>Movie List - With HoC</h2>
      {
        <ul>
          {movies.map((movie, i)=>(
            <li key={i}>
              <img src={movie.poster} alt={movie.title} />
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default withFetch(MovieList);