import React from 'react'
import './Home.css';
import breakers from '../../assets/breakers.jpeg'
import outdoors from '../../assets/outdoors.jpeg'
import pinkSteak from '../../assets/pinkSteak.jpg'
import breakersHotel from '../../assets/breakersHotel.jpeg'
import HomeBG from '../../assets/HomeBG.jpeg'
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='homePage'>
        <Banner img={breakers} title={''}/>

      <div className='homeTitleContainer'>

      <h1 className='homeTitle'>The Palm Beaches & Beyond</h1>
      <h3 className='homeSub'>The Best of The Palm Beaches</h3>
      
  
      <p className='homePara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit officia magni, possimus deserunt natus obcaecati velit id doloremque odit repudiandae error quasi suscipit. Fugiat porro dolores ex in mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque!
      </p>
      </div>
      
        <div className='imgOne'>
          <img src={outdoors} style={{width: '450px', height: '350px'}}alt='Palm Beach Outdoors Photo' />
        </div>


      <div className='homeDiningContainer'>
      <h1 className='homeDiningTitle'>The Palm Beaches Dining</h1>
      <h3 className='homeDiningSub'>Dine in Luxury</h3>
      <p className='homeDiningPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit officia magni, possimus deserunt natus obcaecati velit id doloremque odit repudiandae error quasi suscipit. Fugiat porro dolores ex in mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque!
      </p>
      </div>

      <div className='imgTwoDining'>
      <img src={pinkSteak} style={{width: '450px', height: '350px'}}alt='Pink Steak Photo' />
      </div>


        <div className='homeHotelTitleContainer'>

      <h1 className='homeHotelTitle'>Palm Beach Hotels</h1>
      <h3 className='homeHotelSub'>The Best Experiences</h3>
      
  
      <p className='homeHotelPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit officia magni, possimus deserunt natus obcaecati velit id doloremque odit repudiandae error quasi suscipit. Fugiat porro dolores ex in mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi soluta voluptate accusamus mollitia maiores blanditiis rerum, molestiae consequuntur voluptatibus neque eaque distinctio ducimus, incidunt, deleniti iure natus consequatur atque!
      </p>
      </div>
      
        <div className='imgThreeHotel'>
        <img src={breakersHotel} style={{width: '450px', height: '350px'}}alt='Breakers Hotel Photo' />
        </div>

        
    
    </div>
  )
}

export default Home;
