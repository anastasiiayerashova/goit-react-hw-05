import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
    return (
        <div> 
            <h1 className={s.title}>Trending today</h1>
            <MovieList />
             </div>
    )
}