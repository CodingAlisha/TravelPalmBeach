import React from 'react'
import './Hotel.css'
import Card from '../../components/Card/Card'
import breakers from '../../assets/breakers.jpeg'
import hotelBanner from '../../assets/hotelBanner.jpg'
import ritz3 from '../../assets/ritz3.jpeg'
import fourSeasons from '../../assets/fourSeasons.jpg'
import whiteEle from '../../assets/whiteEle.jpg'
import hotelAka from '../../assets/hotelAka.jpg'
import colony from '../../assets/colony.jpg'
import breakers2 from '../../assets/breakers2.jpg'
import Banner from '../../components/Banner/Banner'

const hotelInfo = [
  {
    img: breakers2 ,
    title: 'THE BREAKERS',
    description: "The Breakers is a legendary Palm Beach icon that has defined luxury and elegance for well over a century, standing as one of the most magnificent oceanfront resorts in the world. With its breathtaking architecture, pristine private beach, and impeccable service, a stay at The Breakers is a timeless and unforgettable experience that captures everything Palm Beach is renowned for.",
    link: 'https://www.thebreakers.com/',
     buttonTag: 'Learn More'
  },
  {
    img: ritz3 ,
    title: 'RITZ-CARLTON',
    description: "The Ritz Carlton Palm Beach is a stunning oceanfront retreat that delivers the signature world class luxury and impeccable service the brand is globally renowned for, all set against the breathtaking backdrop of the Atlantic Ocean. With beautifully appointed rooms, exceptional dining, and an atmosphere of refined elegance, a stay at the Ritz Carlton is a truly indulgent experience that perfectly complements everything Palm Beach has to offer.",
    link: 'https://theresidencespalmbeachgardens.com/',
     buttonTag: 'Learn More'
  },
  {
    img: fourSeasons ,
    title: 'FOUR SEASONS',
    description: "The Four Seasons Palm Beach is an exquisite oceanfront sanctuary that effortlessly combines understated elegance with the warm, relaxed charm of the Florida coast. With its beautifully appointed rooms, world class amenities, and the exceptional personalized service the Four Seasons brand is celebrated for, every moment of your stay feels thoughtfully curated and utterly luxurious.",
    link: 'https://www.fourseasons.com/',
     buttonTag: 'Learn More'
  },
  {
    img: whiteEle  ,
    title: 'WHITE ELEPHANT',
    description: "The White Elephant Palm Beach is a charming and sophisticated boutique hotel that brings a fresh and stylish energy to the Palm Beach luxury scene. With its beautifully designed spaces, impeccable service, and a warm and inviting atmosphere that makes every guest feel right at home, the White Elephant is a truly delightful and memorable place to experience the very best of Palm Beach hospitality.",
    link: 'https://www.whiteelephantpalmbeach.com/',
     buttonTag: 'Learn More'
  },
  {
    img: hotelAka  ,
    title: 'HOTEL AKA',
    description: 'Hotel AKA Palm Beach is a sleek and modern retreat that offers a sophisticated and contemporary take on Palm Beach luxury, perfect for travelers who appreciate stylish design and thoughtful amenities. With its beautifully appointed spaces, personalized service, and an atmosphere that effortlessly blends comfort with elegance, Hotel AKA is a stunning home base for exploring everything this incredible destination has to offer.',
    link: 'https://www.stayaka.com/',
     buttonTag: 'Learn More'
  },
  {
    img: colony ,
    title: 'THE COLONY',
    description: 'The Colony Palm Beach is a beloved and iconic boutique hotel that perfectly captures the playful elegance and timeless charm that Palm Beach is famous for. With its signature pink facade, beautifully curated interiors, and a vibrant atmosphere that is equal parts sophisticated and fun, The Colony is a one of a kind destination that has been enchanting guests for decades and remains an absolute gem in the heart of Palm Beach.',
    link: 'https://thecolonypalmbeach.com/',
     buttonTag: 'Learn More'
  }
]



const Hotel = () => {
  return (
    <div className='hotelPage'>

    <Banner img={hotelBanner} title={''}/>
      <h1 className='hotelTitle'>LUXURY HOTELS</h1>
      <p className='hotelText'>Palm Beach is a playground for adventure seekers and outdoor enthusiasts alike, offering an extraordinary range of thrilling experiences that go far beyond the beautiful beaches and luxury lifestyle the destination is known for. From the heart pumping rush of jet skiing and skydiving to the wild excitement of ax throwing and the peaceful wonder of exploring nature preserves and wildlife, there is truly something for every kind of adventurer. Whether you are visiting with family, friends, or a loved one, Palm Beach delivers an endless array of unforgettable experiences that will leave you energized, inspired, and already planning your next visit.</p>

      <div className='hotelContainer'>
       {hotelInfo.map((item, index) => (
        <Card 
        key={index}
        img={item.img}
        title={item.title}
        description={item.description}
        link={item.link}
        buttonTag={item.buttonTag}
        />

       ))}

      </div>

    </div>
  )
}

export default Hotel;
