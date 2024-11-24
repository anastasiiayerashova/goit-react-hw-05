import s from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import { searchMovie } from '../../api'
import { useParams, useSearchParams } from 'react-router-dom'


export default function MoviesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [showMovieList, setShowMovieList] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
   
    const newQuery = searchParams.get('query') ?? ''
   
    useEffect(() => {
            setSearchQuery(newQuery)
    }, [newQuery])
    
    const handleSearchSubmit = (query) => {
        
        setSearchParams({ query })
        setShowMovieList(true)
   }
    return (
        <div>  
         <SearchBar onSubmit={handleSearchSubmit}/>
            {showMovieList && <MovieList searchQuery={searchQuery}/>}
            </div>
    )
}