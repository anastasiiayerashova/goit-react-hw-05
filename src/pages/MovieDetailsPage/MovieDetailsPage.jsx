import s from './MovieDetailsPage.module.css'
import { getMovieDetails } from '../../api'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BackLink from '../../components/BackLink/BackLink'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function MovieDetailsPage() {
    const location = useLocation()
    const backLinkHref = useRef(location.state ?? '/movies')
    const { movieId } = useParams()
    const [details, setDetails] = useState(null)

    useEffect(() => {
        document.title = 'Details'
        const getDetails = async () => {
            const data = await getMovieDetails(movieId)
            setDetails(data)
        }
        getDetails()
    }, [movieId])

    if (!details) {
        return null
    }

    const { release_date } = details
    const year = new Date(release_date).getFullYear()

    const { vote_average } = details
    const vote = Math.round(vote_average * 10)

    const { revenue } = details
    const finalRevenue = revenue.toLocaleString('en-US')

    const {budget} = details
    const finalBudget = budget.toLocaleString('en-US')

    const finalRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return `${hours}h ${mins}m`
    }
    
    
    return (
        <div>
            <BackLink to={backLinkHref.current}/>
            <div className={s.firstDiv}>
                <img src={`https://image.tmdb.org/t/p/w400${details.poster_path}`} alt={details.title} />
                <div className={s.secDiv}>
                    <div className={s.titleDiv}> 
                    <h2>{`${details.title} (${year})`}</h2>
                        {details.tagline !== '' && (
                            <p>{`${details.tagline}...`}</p>
                        )}
                        <a href={`https://www.imdb.com/title/${details.imdb_id}`} target='_blank' rel='noopener noreferrer'>View on IMDb</a>
                        </div>
                    <div className={s.firstPart}>
                        <h3>User score:
                            {' '}<span>{`${vote}%` }</span>
                        </h3>
                        {details.origin_country && <h3>Origin country:
                            {' '}<span>{details.origin_country}</span>
                        </h3>}
                        <h3>Production company:
                            {' '}<span>{details.production_companies[0]?.name}</span>
                        </h3>
                        {details.budget > 0 && (
                            <h3>Budget:
                            {' '}<span>{`$${finalBudget}`}</span>
                            </h3>
                        )}
                        {details.revenue > 0 && (
                            <h3>Revenue:
                            {' '}<span>{`$${finalRevenue}`}</span>
                            </h3>
                        )}
                         {details.vote_count > 0 && (
                            <h3>Total votes:
                            {' '}<span>{details.vote_count}</span>
                            </h3>
                        )}
                        <h3>Runtime:
                            {' '}<span>{finalRuntime(details.runtime)}</span>
                        </h3>
                        <h3>Popularity:
                            {' '}<span>{details.popularity.toFixed(2)}</span>
                        </h3>
                        <div className={s.genresDiv}>
                            <h3>Genres:&nbsp;</h3>
                            <p>{details.genres.map(genre => genre.name).join(', ') }</p>
                             </div>
                       
                    </div>
                </div>
            </div>
            <div className={s.desc}>
                <h3>Overview</h3>
                <p>{details.overview}</p>
            </div>
            <div className={s.navDiv}> 
            <h3>Additional information</h3>
            <nav className={s.nav}>
                <NavLink to='cast' className={buildLinkClass}>Cast</NavLink>
                <NavLink to='reviews' className={buildLinkClass}>Reviews</NavLink>
                </nav>
                
                <Outlet />
                </div>
        </div>
    )
}