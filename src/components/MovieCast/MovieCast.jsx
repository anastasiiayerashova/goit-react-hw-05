import s from './MovieCast.module.css'
import { getMovieCast } from '../../api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        return null
    }

    return (
        <div>
            <ul className={s.list}>
                {cast.map(actor => (
                    <li key={actor.cast_id} className={s.item}>
                        {actor.profile_path !== null && (
                                     <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className={s.image} />
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
                    </li>
                ))}
            </ul>
        </div>
    )
}