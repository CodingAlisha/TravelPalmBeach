import React from 'react'
import './Card.css'
import Button from '../Button/Button';



const Card = ({img, imgAlt, title, description, link, buttonTag}) => {

  return (
  
    <div className='cardContainer'>
      <img 
      src={img}
      atl={imgAlt} className='cardImg'>
      </img>

      <h1 className='cardTitle'>{title}</h1>

      <p className='cardDescription'>{description}</p>

      <Button link={link} className='Btn'>{buttonTag}</Button>

     

      
    </div>
  );
}

export default Card;


