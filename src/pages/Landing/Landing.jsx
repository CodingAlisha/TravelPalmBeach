import React from 'react'
import './Landing.css';
import breakers from '../../assets/breakers.jpeg'
import outdoors from '../../assets/outdoors.jpeg'
import pinkSteak from '../../assets/pinkSteak.jpg'
import breakersHotel from '../../assets/breakersHotel.jpeg'
import HomeBG from '../../assets/HomeBG.jpeg'
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card';
import SteakHouse from '../../assets/steakHouse.jpg'

const landingCards = [
  {
    img: SteakHouse ,
    title: 'ROMANCE',
    description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
    link: '/Romance',
    // link: 'https://www.thebreakers.com/dining/echo/',
     buttonTag: 'Learn More'
  },
  {
    img: SteakHouse ,
    title: 'ADVENTURE',
    description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
    link: '/Adventure',
    // link: 'https://www.thebreakers.com/dining/echo/',
     buttonTag: 'Learn More'
  },
  {
    img: SteakHouse ,
    title: 'HOTEL',
    description: 'Card Description will be listed here for all cards in detail. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsum facilis, deserunt eligendi eos porro repellendus unde quod ullam odio quidem delectus facere eaque? Consectetur, totam pariatur! Numquam, illum ab.',
    link: '/Hotel',
    // link: 'https://www.thebreakers.com/dining/echo/',
     buttonTag: 'Learn More'
  },
]



const Landing = () => {

  return (
    <div className='landingContainer'>
        <Banner img={breakers} title={''}/>

      <div className='landingTextContainer'>
        
      <h1 className='landingTitle'>The Palm Beaches & Beyond</h1>
      <h3 className='landingSub'>The Best of The Palm Beaches</h3>
      
      
  
      <p className='landingPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit officia magni, possimus deserunt natus obcaecati velit id doloremque odit repudiandae error quasi suscipit. Fugiat porro dolores ex in mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque!
      </p>

      <div>
        <Link to='/Dining' className='MainBtn'>Explore</Link>
      </div>
      </div>
      
      
        <div className='imgOneLanding'>
          <img src={outdoors} style={{width: '600px', height: '500px'}}alt='Palm Beach Outdoors Photo' />
        </div>


      <div className='landingDiningContainer'>
      <h1 className='landingDiningTitle'>The Palm Beaches Dining</h1>
      <h3 className='landingDiningSub'>Dine in Luxury</h3>
      <p className='landingDiningPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit officia magni, possimus deserunt natus obcaecati velit id doloremque odit repudiandae error quasi suscipit. Fugiat porro dolores ex in mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque!
      </p>

      <div>
        <Link to='/Dining' className='MainBtn'>Explore</Link>
      </div>
      </div>

      <div className='imgTwoLanding'>
      <img src={pinkSteak} style={{width: '600px', height: '500px'}}alt='Pink Steak Photo' />
      </div>


      <div className='landingHotelContainer'>
      <h1 className='landingHotelTitle'>Palm Beach Hotels</h1>
      <h3 className='landingHotelSub'>The Best Experiences</h3>
      <p className='landingHotelPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit officia magni, possimus deserunt natus obcaecati velit id doloremque odit repudiandae error quasi suscipit. Fugiat porro dolores ex in mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque!
      </p>

      <div>
        <Link to='/Dining' className='MainBtn'>Explore</Link>
      </div>
      </div>
      
        <div className='imgThreeLanding'>
        <img src={breakersHotel} style={{width: '600px', height: '500px'}}alt='Breakers Hotel Photo' />
        </div>

        <div className='landingCardSection'>
          <div>
          <h1 className='landingCardSectionH1'>EXPLORE THE POSSIBILITIES</h1>
          <h2 className='landingCardSectionH2'>It all starts here...Fine Dining, Adventure, Relaxation and more</h2>
          <h3 className='landingCardSectionH3'>It's time to EXPLORE</h3>
          </div>
          
        {landingCards.map((item, index) => (
        <Card 
        key={index}
        img={item.img}
        title={item.title}
        description={item.description}
        link={item.link}
        buttonTag={item.buttonTag}
        />

       ))};

        </div>

        
    
    </div>
  )
}

export default Landing;

