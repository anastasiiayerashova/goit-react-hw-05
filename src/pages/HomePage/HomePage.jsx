import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../../api'

export default function HomePage() {
    const [movies, setMovies] = useState([])
   
    useEffect(() => {
        document.title = 'Home'
        const getMoviesList = async () => {
            const data = await getTrendingMovies()
            setMovies(data)
        }
        getMoviesList()
    }, [])

    return (
        <div> 
            <h1 className={s.title}>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    )
}