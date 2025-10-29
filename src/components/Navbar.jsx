// import { Link } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/mylogo.png';
import { XIcon } from 'lucide-react';


const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 z-50
    w-full flex items-center justify-between px-6
    md:px-16 lg:px-36 py-5"
    >
      {/* <h1>Navbar</h1> */}
      <Link to='/' className='max-md:flex-1'>
        <img src={mylogo}alt=""  className='w-36 h-auto'/>
      </Link>

      <div className='max-md:absolute max-md:top-0
      max md-left-0 max-md:font-medium max-md:text-lg z-50
      flex flex-col md:flex-row items bg-center
      max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
      min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border
      border-gray-300/20 overflow-hidden transition-[width] duration-300'>
        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'/>
        <Link to='/'> Home</Link>
        <Link to='/movies'> Movies</Link>
        <Link to='/'> Theaters</Link>
        <Link to='/'> Releases</Link>
        <Link to='/fav'> Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar
