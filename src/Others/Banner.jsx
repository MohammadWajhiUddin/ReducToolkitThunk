import React from 'react'
import './Banner.css'
import bannerImage from '../assets/images.jpeg'; // if image is in src folder

const Banner = () => {
  return (
    <div className="banner">
    <img src={bannerImage} alt="Banner" />
  </div>
  )
}

export default Banner