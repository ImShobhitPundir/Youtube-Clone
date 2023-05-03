import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-44 shadow-lg p-4 text-sm leading-8'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Explore</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className='font-bold mt-3'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies & Shows</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>

    </div>
  )
}

export default Sidebar