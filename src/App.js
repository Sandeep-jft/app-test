import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './Containers/Error/Error';
import Home from './Containers/Home/Home';
import Movie from './Containers/Movie/Movie';

const App = () => {
  
  return (
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/movie/:id' element={ <Movie /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>
  )
}

export default App