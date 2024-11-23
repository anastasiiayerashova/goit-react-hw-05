import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import MovieCast from './MovieCast/MovieCast'
import MovieReviews from './MovieReviews/MovieReviews'

export default function App() {
  
  return (
      <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews/> } />
        </Route>
        <Route path='*' element={<NotFoundPage/> } />
      </Routes>
      </div>
  )
}