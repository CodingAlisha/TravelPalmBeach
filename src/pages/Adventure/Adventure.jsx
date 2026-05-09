import React from 'react'
import './Adventure.css'
import jetSki3 from '../../assets/jetSki3.jpeg'
import Card from '../../components/Card/Card'
import Axe from '../../assets/Axe.jpg'
import pbZoo from '../../assets/pbZoo.jpg'
import golf from '../../assets/golf.jpeg'
import skyDive from '../../assets/skyDive.jpg'
import grassy from '../../assets/grassy.jpeg'
import adventureBanner2 from '../../assets/adventureBanner2.jpg'
import Banner from '../../components/Banner/Banner'


const adventureInfo = [
  {
    img: jetSki3 ,
    title: 'JET SKI',
    description: "Jet skiing in Palm Beach is an absolute must for water lovers, offering an exhilarating way to experience the stunning Atlantic coastline from a whole new perspective. Skimming across the crystal clear sparkling waters with the warm Florida sun on your face and the ocean breeze rushing past you is a feeling that simply cannot be matched. Whether you are a seasoned rider or a first timer, jet skiing in Palm Beach delivers an unforgettable rush of excitement and freedom that is perfect for couples, families, and friends alike.",
    link: 'https://getwetwatersports.com/',
     buttonTag: 'Learn More'
  },
  {
    img: skyDive ,
    title: 'SKY DIVE',
    description: "Skydiving in Palm Beach is the ultimate adventure experience, offering thrill seekers an unforgettable rush like no other. Free falling from thousands of feet above the earth before floating down over the stunning Atlantic Ocean and lush Palm Beach landscape is a once in a lifetime experience that will leave you absolutely breathless. Skydiving in Palm Beach delivers an unmatched surge of excitement and pure exhilaration perfect for couples, families, and friends alike.",
    link: 'https://skydivepalmbeach.com/',
     buttonTag: 'Learn More'
  },
  {
    img: golf ,
    title: 'GOLF',
    description: "Golfing in Palm Beach is a truly world class experience, offering players of all skill levels the chance to tee off on some of the most beautifully manicured and breathtaking courses in the country. Whether you are a seasoned golfer or just starting out, the exceptional courses of Palm Beach deliver an unforgettable day on the links that is perfect for friends, couples, or a classic family outing.",
    link: 'https://www.pbcokeeheeleegolf.com/',
     buttonTag: 'Learn More'
  },
  {
    img: grassy ,
    title: 'NATURE WALK',
    description: "A nature walk at Grassy Waters Preserve in Palm Beach is a peaceful and rejuvenating experience that reveals the stunning natural beauty this remarkable destination has to offer. Winding trails, lush tropical landscapes, and an incredible variety of native wildlife and bird species create a serene backdrop that invites you to slow down and connect with the world around you. Grassy Waters Preserve is a beautiful and refreshing way to experience the very best of Palm Beach.",
    link: 'https://www.wpb.org/Departments/Grassy-Waters-Preserve/Trail-Information',
     buttonTag: 'Learn More'
  },
  {
    img: pbZoo ,
    title: 'PALM BEACH ZOO',
    description: 'A visit to the Palm Beach Zoo is an exciting and unforgettable experience for animal lovers of all ages, offering an up close and personal encounter with an incredible array of exotic and native wildlife. Whether you are visiting with family, friends, or a loved one, the Palm Beach Zoo delivers a truly magical day out that leaves every visitor with a deep appreciation for the wonders of the animal kingdom.',
    link: 'https://www.palmbeachzoo.org/',
     buttonTag: 'Learn More'
  },
  {
    img: Axe ,
    title: 'AXE THROWING',
    description: 'Axe throwing in Palm Beach is an unexpectedly thrilling and wildly fun experience that is perfect for those looking to add a little edge to their vacation. Whether you are a complete beginner or a seasoned thrower, the rush of sending an ax spinning through the air and hitting your target is an incredible feeling that never gets old. It is a fantastic activity for groups of friends, families, or even couples looking for something a little out of the ordinary.',
    link: 'https://www.jupiterbullseyesandbirdies.com/',
     buttonTag: 'Learn More'
  }
]




const Adventure = () => {
  return (

    <div className='adventurePage'>

    <Banner img={adventureBanner2} title={''}/>
      <h1 className='adventureTitle'>ADVENTURE UNLEASHED</h1>
      <p className='adventureText'>Palm Beach is a playground for adventure seekers and outdoor enthusiasts alike, offering an extraordinary range of thrilling experiences that go far beyond the beautiful beaches and luxury lifestyle the destination is known for. From the heart pumping rush of jet skiing and skydiving to the wild excitement of ax throwing and the peaceful wonder of exploring nature preserves and wildlife, there is truly something for every kind of adventurer. Whether you are visiting with family, friends, or a loved one, Palm Beach delivers an endless array of unforgettable experiences that will leave you energized, inspired, and already planning your next visit.</p>

      <div className='adventureContainer'>
       {adventureInfo.map((item, index) => (
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

export default Adventure;


