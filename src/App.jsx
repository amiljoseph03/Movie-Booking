import React from 'react'
import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom'
import  Home from './pages/Home'
import  Movies  from './pages/Movies';
import  MovieDetails  from './pages/MovieDetails';
import  Seat  from './pages/Seat';
import MyBookings from './pages/MyBookings';
// import { Fav } from './pages/Fav';
import Fav from './pages/Fav';




const App = () => {
  return (
    <>
      <Navbar />
      <h2>Hello world</h2>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<Seat />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Fav />} />
      </Routes> */}
    </>
  );
}

export default App
