import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../../api'
import Loader from '../../components/Loader/Loader'
import { motion } from 'framer-motion'
import { AnimatedLayout } from '../../components/AnimatedLayout'
import Footer from '../../components/Footer/Footer'

const textAnimation = {
    hidden: { 
        scale: 0.5, 
        opacity: 0 
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.5 }
    })
};

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
    <AnimatedLayout>
        <div> 
            <motion.h1 className={s.title} custom={1} variants={textAnimation} initial='hidden' animate='visible'>Trending today</motion.h1>
            <motion.p className={s.text} custom={2} variants={textAnimation} initial='hidden' animate='visible'>Explore our collection of movies and click on any movie to uncover detailed information about the film, including its plot, cast, release date, and much more!</motion.p>
            <MovieList movies={movies} />
            </div>
            <Footer/>
    </AnimatedLayout>
    )
}