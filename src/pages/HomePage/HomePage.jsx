import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../../api'
import Loader from '../../components/Loader/Loader'
import { motion } from 'framer-motion'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}

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

    if (!movies) {
        return <Loader/>
    }

    return (
        <div> 
            <motion.h1 className={s.title} custom={1} variants={textAnimation} initial='hidden' animate='visible'>Trending today</motion.h1>
            <MovieList movies={movies} />
        </div>
    )
}