import React from 'react'
import './Gallery.css'






const Gallery = ({ img, alt, link }) => {


  return (

      <div className='galleryItem'>
        <a href={link} 
        className='galleryLink'
        >

          <img src={img} 
          alt={alt}  
          className='galleryImg'/>
        </a>

        </div>
 
  )
}

export default Gallery;
