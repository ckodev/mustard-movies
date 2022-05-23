

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageFavourites from '../pages/PageFavourites';
import PageContact from '../pages/PageContact';
import PageSingleMovie from '../pages/PageSingleMovie';




function AppRouter() {
  return (
    <BrowserRouter>
        <div className='wrapper'>
            <Header />
            <Routes>
              
                <Route path='/' element={<PageHome sort="now_playing" />}/>
                <Route path='/sort/popular' element={<PageHome sort="popular" />}/>
                <Route path='/sort/top_rated' element={<PageHome sort="top_rated" />}/>
                <Route path='/sort/now_playing' element={<PageHome sort="now_playing" />}/>
                <Route path='/sort/upcoming' element={<PageHome sort="upcoming" />}/>
                <Route path='movie/:id' element={<PageSingleMovie/>}/>
                <Route path='movie/:query' element={<PageSingleMovie/>}/>
                <Route path='/PageFavourites' element={<PageFavourites/>}/>
                <Route path='/PageContact' element={<PageContact/>}/>
        
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter