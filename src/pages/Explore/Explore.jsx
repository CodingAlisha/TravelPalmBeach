

import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import './Explore.css'
import MainGallery from '../../components/MainGallery/MainGallery'

import breakers from '../../assets/breakers.jpeg'
import carriage from '../../assets/carriage.jpeg'
import hotelBanner from '../../assets/hotelBanner.jpg'
import skyDive from '../../assets/skyDive.jpg'
import ruth2 from '../../assets/ruth2.jpg'
import spa from '../../assets/spa.jpeg'

const Explore = () => {


  const photos = [
    {src: breakers , description: 'hotel', link: '/Landing'},
    {src: spa  , description: 'spa date', link: '/Romance'},
    {src: hotelBanner , description: 'adventure', link: '/Hotel'},
    {src: carriage , description: 'romantic-carriage-ride', link: '/Romance'},
    {src: ruth2 , description: 'ruth-chris', link: '/Dining'},
    {src: skyDive , description: 'adventure', link: '/Adventure'},
  ];



  return (
    <div>
      <h1 className='exploreTitle'>EXPLORE & EXPERIENCE</h1>
      <h2 className='exploreText'>Discover the calming unforgettable experiences that make Palm Beach a destination like no other. From relaxing spa dates to exciting adventure, and fine dining, there's always something new to explore. Whether you're visiting for the first time or returning again, every moment offers a unique experience. </h2>


      <MainGallery exploreAll={photos} />
      
    
   
      
    </div>
  )
}

export default Explore;




