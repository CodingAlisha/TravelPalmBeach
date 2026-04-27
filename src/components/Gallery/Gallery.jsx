import React from 'react'
import { RowsPhotoAlbum } from 'react-photo-album'
import './Gallery.css'

const Gallery = ({photos}) => {
  return (
    <div className='gallerySpec'>
      <RowsPhotoAlbum photos={photos}
      targetRowHeight={120}
      rowConstraints={{ maxPhotos: 3 }}
      spacing={8}/>
     
    </div>
  )
}

export default Gallery;
