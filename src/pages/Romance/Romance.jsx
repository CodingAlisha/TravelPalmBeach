import React from 'react'
import './Romance.css'
import Card from '../../components/Card/Card'
import BackgroundImg from '../../assets/HomeBG.jpeg'
import spa from '../../assets/spa.jpeg'
import surLaTable from '../../assets/surLaTable.jpeg'
import carriage from '../../assets/carriage.jpeg'
import Morikami from '../../assets/Morikami.jpeg'
import wine from '../../assets/wine.jpeg'
import annNorton from '../../assets/annNorton.jpg'
import romanceBanner2 from '../../assets/romanceBanner2.jpg'
import Banner from '../../components/Banner/Banner'


const romanceInfo = [
  {
    img: carriage ,
    title: 'CARRIAGE RIDE',
    description: "A horse-drawn carriage ride through the beautiful streets of Palm Beach is one of the most romantic experiences a couple can share, offering a charming and unhurried way to take in the city's elegance and natural beauty. As you glide past stunning architecture, lush tropical landscaping, and the warm glow of the evening lights, time seems to slow down in the most wonderful way, creating a memory that will stay with you long after the ride is over.",
    link: 'https://windchase.farm/',
     buttonTag: 'Learn More'
  },
  {
    img: surLaTable ,
    title: 'SUR LA TABLE',
    description: "Sur La Table in Palm Beach offers couples a truly unique and memorable experience, bringing them together in the most delicious way possible through the art of cooking. With hands-on classes led by talented culinary instructors, couples can learn new skills, discover fresh techniques, and create incredible dishes side by side in a warm and inviting atmosphere. It's a fun, interactive, and surprisingly romantic way to spend time together — and the best part is getting to enjoy everything you made at the end.",
    link: 'https://www.surlatable.com/cooking-classes/',
     buttonTag: 'Learn More'
  },
  {
    img: spa ,
    title: 'COUPLES SPA',
    description: "A couples spa experience in Palm Beach is the ultimate way to unwind, reconnect, and indulge in pure relaxation together. Side-by-side treatments, soothing atmospheres, and the expert hands of skilled therapists combine to create a deeply restorative escape that leaves both body and mind completely renewed. It is a beautifully intimate experience that slows everything down and reminds you why there is no better person to share life's most luxurious moments with.",
    link: 'https://www.anushkaspa.com/services/spa-day-packages-in-west-palm-beach/',
     buttonTag: 'Learn More'
  },
  {
    img: Morikami ,
    title: 'MORIKAMI MUSEUM',
    description: "The Morikami Museum and Japanese Gardens offers couples a serene and utterly enchanting escape that is unlike anything else in Palm Beach. Strolling hand-in-hand through the breathtakingly beautiful Japanese gardens, with tranquil koi ponds, lush landscaping, and peaceful walking paths at every turn, creates a sense of calm and connection that is truly special. It is a cultural gem that invites couples to slow down, soak in the beauty around them, and share a uniquely memorable experience together.",
    link: 'https://morikami.org/upcoming-events/classes/',
     buttonTag: 'Learn More'
  },
  {
    img: wine ,
    title: 'WINE TASTING',
    description: 'A wine tasting experience in Palm Beach is a sophisticated and thoroughly enjoyable way for couples to spend an afternoon or evening together, exploring a world of flavors in an elegant and relaxed setting. Guided by knowledgeable sommeliers, couples can discover new varietals, learn the art of pairing, and share in the pleasure of each carefully selected pour. It an intimate experience that sparks conversation and adds a touch of refined indulgence to any romantic getaway.',
    link: 'https://www.citycellarwpb.com/',
     buttonTag: 'Learn More'
  },
  {
    img: annNorton ,
    title: 'ANN NORTON',
    description: 'The Ann Norton Sculpture Gardens offers couples a magical and unexpected escape into a world where art and nature beautifully intertwine. Wandering through the lush, tropical grounds adorned with striking sculptures and rare palms creates a sense of wonder and discovery that makes for a truly one of a kind shared experience. It is a hidden gem that invites couples to slow down, appreciate the beauty around them, and connect in a peaceful and inspiring setting that is uniquely Palm Beach.',
    link: 'https://ansg.org/',
     buttonTag: 'Learn More'
  }
]



const Romance = () => {
  return (
    <div className='romancePage'>

    <Banner img={romanceBanner2} title={''}/>
      <h1 className='romanceTitle'>ROMANCE AWAITS</h1>
      <p className='romanceText'>Palm Beach sets the perfect stage for an unforgettable romantic night out with your spouse, offering a wealth of beautiful experiences that bring you closer together in the most magical setting. Begin your evening with an enchanting horse-drawn carriage ride through the city's elegant streets, soaking in the charm and beauty of Palm Beach at its most romantic. Indulge in a couples spa treatment that melts away the everyday and leaves you both feeling completely refreshed and deeply connected. If you're feeling adventurous, a hands-on cooking class offers a fun and delicious way to bond over incredible food and shared laughter. Or simply slow down, find a quiet spot, and enjoy each other's company .</p>

      <div className='romanceContainer'>
       {romanceInfo.map((item, index) => (
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

export default Romance;
