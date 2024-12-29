import s from './MovieCast.module.css'
import { getMovieCast } from '../../api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { motion } from 'framer-motion'

export default function MovieCast() {
    const [cast, setCast] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        const getCast = async () => {
            const data = await getMovieCast(movieId)
            setCast(data)
        }
        getCast()
    }, [movieId])
    
    if (!cast) {
        return <Loader/>
    }

    if (cast.length === 0) {
        return <p className={s.castText}>Cast details are missing. Check back later for updates!</p>
    }

    const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
    },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }, 
  }),
}

    return (
        <div>
            <motion.ul className={s.list} initial='hidden' animate='visible'>
                {cast.map((actor, index) => (
                    <motion.li key={actor.cast_id} className={s.item} variants={featureAnimation} custom={index + 1}>
                        {actor.profile_path ? (
                                     <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className={s.image} />
                        ) : (
                                     <img src='/defaultActor.jpg' alt={actor.name} className={s.image} />
                        )}
                        <div className={s.actorDiv}>
                            <h4>{actor.name}</h4>
                            <h5>Character:
                                {' '}<span>{actor.character}</span>
                            </h5>
                            {actor.popularity > 0 && (
                                <h5>Popularity:
                                {' '}<span>{actor.popularity.toFixed(2)}</span>
                            </h5>
                            )}
                            <h5>Known for:
                                {' '}<span>{actor.known_for_department}</span>
                            </h5>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}