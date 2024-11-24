import s from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MovieList({movies}) {
    const location = useLocation()
    return (
        <div> 
        <ul className={s.list}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id.toString()}`} state={location}>
                        <h2>{movie.title}</h2>
                    </Link>
              </li>
          ))}
            </ul>
            </div>
    )
}