import React from 'react'
import './Landing.css';
import breakers from '../../assets/breakers.jpeg'
import spa from '../../assets/spa.jpeg'
import outdoors from '../../assets/outdoors.jpeg'
import pinkSteak from '../../assets/pinkSteak.jpg'
import jetSki3 from '../../assets/jetSki3.jpeg'
import breakersHotel from '../../assets/breakersHotel.jpeg'
import HomeBG from '../../assets/HomeBG.jpeg'
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card';
import SteakHouse from '../../assets/steakHouse.jpg'
import Explore from '../Explore/Explore';
import Romance from '../Romance/Romance';
import Adventure from '../Adventure/Adventure';
import Hotel from '../Hotel/Hotel';

const landingCards = [
  {
    img: spa,
    title: 'ROMANCE',
    description: "Palm Beach is one of the most romantic destinations on the East Coast, offering couples a wealth of unforgettable shared experiences in a setting of pure natural beauty. From enchanting horse-drawn carriage rides through the city's charming streets to indulgent side-by-side spa treatments, every moment feels thoughtfully designed for togetherness.",
    link: '/Romance',
     buttonTag: 'Learn More'
  },
  {
    img: jetSki3 ,
    title: 'ADVENTURE',
    description: 'Palm Beach is one of the most exciting destinations on the East Coast, offering adventure seekers and outdoor enthusiasts a thrilling range of experiences set against a stunning tropical backdrop. From the rush of jet skiing along the sparkling Atlantic waters to exploring the incredible wildlife and exotic animals at the Palm Beach Zoo, there is truly no shortage of exhilarating ways to make the most of your visit.',
    link: '/Adventure',
    // link: 'https://www.thebreakers.com/dining/echo/',
     buttonTag: 'Learn More'
  },
  {
    img: breakers ,
    title: 'HOTEL',
    description: 'Palm Beach is home to some of the most breathtaking hotels on the East Coast, offering travelers a level of luxury and hospitality that is simply unmatched. From the legendary Breakers, an iconic oceanfront resort that has defined Palm Beach elegance for over a century, to a wealth of other stunning properties, every stay in Palm Beach feels like a truly special occasion.',
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
      
      
  
      <p className='landingPara'>Palm Beach, Florida is truly one of the most captivating destinations on the East Coast, offering a perfect blend of luxury, natural beauty, and vibrant experiences that appeal to every kind of traveler. With its warm, sun-drenched climate year-round. Couples will find it endlessly romantic, with world-class fine dining showcasing fresh coastal cuisine alongside elegant atmospheres perfect for a memorable evening out, while families are equally well-served with a wealth of activities that keep all ages entertained. Whether you're indulging in exceptional culinary experiences or simply soaking in the sophisticated yet relaxed coastal charm, Palm Beach delivers an unforgettable escape that leaves every visitor eager to return.
      </p>

      <div>
        <Link to='/Explore' className='MainBtn'>Explore</Link>
      </div>
      </div>
      
      
        <div className='imgOneLanding'>
          <img src={outdoors} style={{width: '600px', height: '500px'}}alt='Palm Beach Outdoors Photo' />
        </div>


      <div className='landingDiningContainer'>
      <h1 className='landingDiningTitle'>The Palm Beaches Dining</h1>
      <h3 className='landingDiningSub'>Dine in Luxury</h3>
      <p className='landingDiningPara'>Palm Beach is a true paradise for food lovers, offering a dining scene that is as sophisticated as it is diverse. Among the standout destinations is Pink Steak, an iconic and visually stunning restaurant that perfectly captures the glamour and indulgence Palm Beach is known for, serving exceptional cuts in an atmosphere that is as memorable as the meal itself. From intimate candlelit bistros to grand waterfront dining rooms with sweeping ocean views, every meal in Palm Beach feels like a special occasion. Whether you're savoring a perfectly crafted tasting menu, enjoying handcrafted cocktails at a chic lounge, or treating yourself to a lavish Sunday brunch, the fine dining experience here is one that lingers long after the last bite.
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
      <h3 className='landingHotelSub'>Experiences Timeless Elegance</h3>
      <p className='landingHotelPara'>Palm Beach is home to some of the most extraordinary hotels in the world, offering accommodations that are as much a destination as the city itself. At the heart of it all stands The Breakers, a magnificent and iconic oceanfront resort that has defined Palm Beach luxury for well over a century. With its breathtaking Italian Renaissance architecture, pristine private beach, and impeccable service, The Breakers is nothing short of legendary — a place where every detail has been thoughtfully crafted to create an experience of timeless elegance. Beyond this iconic landmark, Palm Beach offers a wealth of other exceptional properties. Each property brings its own personality to the table, yet all share a commitment to the refined hospitality and attention to detail that Palm Beach travelers have come to expect. Whether you're seeking a grand, resort-style escape or a more private and intimate hideaway, the hotels of Palm Beach promise a stay that is as unforgettable as the destination itself.
      </p>

      <div>
        <Link to='/Hotel' className='MainBtn'>Explore</Link>
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

       ))}
       <div>
       <Link to='/Explore' className='ExploreBtn'>EXPLORE ALL</Link>
       </div>

       

       

        </div>

        
    
    </div>
  )
}

export default Landing;

