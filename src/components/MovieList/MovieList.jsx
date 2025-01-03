import s from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const featureAnimation = {
  hidden: {
    y: 300,
    opacity: 0,
    },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 }, 
    duration: 0.5,
    ease: "easeOut"
  }),
}

const hoverAnimation = {
    scale: 1.1
}

export default function MovieList({movies}) {
    const location = useLocation()
    return (
        <div> 
        <motion.ul className={s.list} initial='hidden' animate='visible'>
            {movies.map((movie, index) => (
                <motion.li key={movie.id} className={s.item} variants={featureAnimation} custom={index + 1} whileHover={hoverAnimation}>
                    <Link to={`/movies/${movie.id.toString()}`} state={location}>
                        
                        {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} className={s.img} />)
                            : (<img src='/defaultMoviePoster.jpg' alt={movie.title} className={s.img} />)
                        }
                        <h2>{movie.title}</h2>
                    </Link>
              </motion.li>
          ))}
            </motion.ul>
            </div>
    )
}