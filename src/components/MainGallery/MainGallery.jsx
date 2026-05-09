

import React from 'react'
import './MainGallery.css';

const MainGallery = ({ exploreAll = [] }) => {
  return (
   
       <section className= 'galleryAlbum'>

        {exploreAll.map((photo, index) => (
          
        <a 
        key={index}
        href={photo.link} 
        className='galleryLink'
        >

          <img src={photo.src} 
          alt={photo.description}  
          className='MainGalleryImg'/>
        </a>

        ))}
    
        </section>

  )
}

export default MainGallery;
