import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Movies from './Components/Movies/Movies';
import Directors from './Components/Directors/Directors';
import Categories from './Components/Categories/Categories';
import Navbar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Home from './Components/Home';
import DetailsMovie from './Components/Movies/DetailsMovie';
import NoPage from './Components/NoPage';
import DetailsDirectors from './Components/Directors/DetailsDirectors';
import DetailsCategories from './Components/Categories/DetailsCategories';
import EditMovies from './Components/Movies/EditMovies';
import EditCategories from './Components/Categories/EditCategories';
import EditDirectors from './Components/Directors/EditDirectors';

export default function App(props){

    return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/edit/:id' element={<EditMovies/>}/>
          <Route path='/movies/detail/:id' element={<DetailsMovie/>}/>
          <Route path='/directors' element={<Directors/>} />
          <Route path='/directors/detail/:id' element={<DetailsDirectors/>}/>
          <Route path='/directors/edit/:id' element={<EditDirectors/>}/>
          <Route path='/categories' element={<Categories/>} />
          <Route path='/categories/detail/:id' element={<DetailsCategories/>}/>
          <Route path='/categories/edit/:id' element={<EditCategories/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
        <Carousel/>
      </div>
    );
}
