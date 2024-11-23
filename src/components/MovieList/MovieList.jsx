import { useEffect, useState } from 'react'
import s from './MovieList.module.css'
import { getTrendingMovies } from '../../api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { searchMovie } from '../../api'


export default function MovieList({searchQuery}) {
    
    const location = useLocation()
    const [movies, setMovies] = useState([])
   

    useEffect(() => {
        document.title = 'Home'
        const getMoviesList = async () => {
            const data = searchQuery ? await searchMovie(searchQuery) : await getTrendingMovies()
            setMovies(data)
        }
        getMoviesList()
    }, [searchQuery])

    if (!movies || movies.length === 0) {
        return <p>No movies found...</p>
    }


    // const filteredData = movies.filter(movie => movie.title.toLowerCase().includes(newQuery.toLowerCase()))

    return (
        <div> 
          
        <ul className={s.list}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id.toString()}`} state={location}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className={s.image} />
                        <h2>{movie.title}</h2>
                    </Link>
              </li>
          ))}
            </ul>
            </div>
    )
}