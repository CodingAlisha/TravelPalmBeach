import React from 'react'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import DineBanner from '../../assets/dineBanner.jpg'
import pinkSteakFood from '../../assets/pinkSteakFood.jpg'
import blackbird from '../../assets/blackbird.jpeg'
import echo from '../../assets/echo.jpg'
import cheeseCake from '../../assets/cheeseCake.jpeg'
import tap42 from '../../assets/tap42.jpg'
import steakHouse from '../../assets/steakHouse.jpg'
import './Dining.css'
import Gallery from '../../components/Gallery/Gallery'


const Dining = () => {

  const diningInfo = [
    {
      img: echo ,
      title: 'ECHO',
      description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
      link: 'https://www.amazon.com',
       buttonTag: 'Learn More'
    },
    {
      img:pinkSteakFood,
      title: 'PINK STEAK',
      description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
      link: 'https://www.google.com',
      buttonTag: 'Learn More'
    },
    {
      img: tap42 ,
      title: 'TAP42',
      description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
      link: 'https://www.amazon.com',
       buttonTag: 'Learn More'
    },
    {
      img: steakHouse,
      title: ' OKEECHOBEE STEAKHOUSE',
      description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? facere eaque? facere eaque? facere?',
      link: 'https://www.amazon.com',
       buttonTag: 'Learn More'
    },
    {
      img:blackbird ,
      title: 'BLACKBIRD MODERN ASIAN',
      description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
      link: 'https://www.papajohns.com',
      buttonTag: 'Learn More'
    },
    {
      img: cheeseCake ,
      title: 'THE CHEESECAKE FACTORY',
      description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
      link: 'https://www.amazon.com',
       buttonTag: 'Learn More'
    },
    
  ]

  const diningPhotos = [
    // {src:echo, width: 1, height: 1},
   
    {src:'https://picsum.photos/800/200', width: 8, height: 6},
    {src:'https://picsum.photos/600/200', width: 1, height: 1},
    {src:'https://picsum.photos/750/200', width: 5, height: 4},
    {src:'https://picsum.photos/700/200', width: 7, height: 5},
    {src:'https://picsum.photos/650/200', width: 13, height: 12},
    {src:'https://picsum.photos/800/200', width: 8, height: 7},
  
  ]

  return (
    <div className='diningPage'>
      <Banner img={DineBanner} title={''}/>

      <h1 className='diningTitle'>This is the dining page</h1>

      <div className='diningContainer'>
       {diningInfo.map((item, index) => (
        <Card 
        key={index}
        img={item.img}
        title={item.title}
        description={item.description}
        link={item.link}
        buttonTag={item.buttonTag}
        />

       ))};

       <div>
          {/* <Gallery 
          photos={diningPhotos} 
          /> */}
       </div>

       </div>
      
      
      
    </div>
  )
}

export default Dining
