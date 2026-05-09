import React from 'react'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import DineBanner from '../../assets/dineBanner.jpg'
import pinkSteakFood from '../../assets/pinkSteakFood.jpg'
import ruth2 from '../../assets/ruth2.jpg'
import cooper from '../../assets/cooper.jpg'
import echo from '../../assets/echo.jpg'
import tap42 from '../../assets/tap42.jpg'
import capitalGrille from '../../assets/capitalGrille.jpg'
import './Dining.css'



const Dining = () => {

  const diningInfo = [
    {
      img: echo ,
      title: 'ECHO',
      description: 'Echo Palm Beach is an upscale Asian fusion restaurant known for blending Chinese, Japanese, Thai, and Vietnamese flavors into one menu. The restaurant features a stylish, modern atmosphere with both indoor and outdoor seating, making it popular for both casual dinners and special occasions. Signature dishes include sushi, Peking duck, and flavorful noodle and rice options. Its central Palm Beach location and reputation for high-quality cuisine make it a standout dining spot in the area.',
      link: 'https://www.thebreakers.com/dining/echo/',
       buttonTag: 'Learn More'
    },
    {
      img:pinkSteakFood,
      title: 'PINK STEAK',
      description: 'Pink Steak is a trendy, upscale steakhouse known for its vibrant atmosphere and modern take on classic steakhouse dining. The restaurant offers high-quality cuts of steak, fresh seafood, and creative side dishes, all presented with stylish flair. Its chic design and lively ambiance make it a popular spot for both special occasions and nights out. Located in Palm Beach, it stands out for combining luxury dining with a fun, contemporary vibe.',
      link: 'https://www.pinksteak.com/',
      buttonTag: 'Learn More'
    },
    {
      img: tap42 ,
      title: 'TAP42',
      description: "Tap 42 is an upscale casual restaurant known for its modern American cuisine and lively atmosphere. The menu features favorites like burgers, steaks, and shareable appetizers, along with a wide selection of craft beers and cocktails. It's especially popular for brunch and happy hour, offering a fun and social dining experience. With its stylish setting and diverse menu, it's a go-to spot in the Palm Beach area.",
      link: 'https://tap42.com/',
       buttonTag: 'Learn More'
    },
    {
      img: ruth2 ,
      title: "RUTH'S CHRIS",
      description: "Ruth's Chirs Steak House is an upscale steakhouse known for serving high-quality USDA Prime steaks in an elegant setting. Their signature style features steaks cooked at extremely high temperatures and served sizzling on hot plates, keeping them warm and flavorful. The restaurant also offers fresh seafood, classic sides, and an extensive wine selection. With its refined atmosphere and attentive service, it's a popular choice for special occasions and fine dining. ",
      link: 'https://www.ruthschris.com/home/west-palm-beach/7342',
       buttonTag: 'Learn More'
    },
    {
      img: cooper ,
      title: 'COOPERS HAWK',
      description: "Cooper's Hawk Winery & Restaurant is an upscale casual restaurant that combines a full-service dining experience with an on-site winery and tasting room. The menu features a mix of American dishes like steak, seafood, and pasta, all designed to pair well with their handcrafted wines. The atmosphere is modern and lively, making it a popular spot for both casual outings and special occasions. Known for its wine-focused concept and large wine club, it offers a unique blend of dining and wine culture.",
      link: 'https://chwinery.com/',
       buttonTag: 'Learn More'
    },
    {
      img: capitalGrille ,
      title: 'CAPITAL GRILLE',
      description: "The Capital Grille is an upscale steakhouse known for its refined atmosphere and expertly prepared steaks and seafood. The restaurant offers high-quality cuts like filet mignon and dry-aged steaks, along with classic sides and an extensive wine selection. Its elegant setting and attentive service make it a popular choice for special occasions and fine dining experiences. Located in Palm Beach Gardens, it's widely recognized for delivering both luxury and consistency in its cuisine.",
      link: 'https://www.thecapitalgrille.com/home',
       buttonTag: 'Learn More'
    },
    
  ]


  return (
    <div className='diningPage'>
      <Banner img={DineBanner} title={''}/>

      <h1 className='diningTitle'>INDULGE & DINE</h1>
      <p className='diningText'>Palm Beach is a culinary paradise that offers an extraordinary fine dining scene suited for every occasion and every kind of gathering. Whether you're planning an intimate dinner with family, a lively night out with friends, or a sophisticated corporate event, the restaurants of Palm Beach deliver an experience that goes far beyond the meal itself. The area boasts a remarkable array of venues helmed by talented chefs who craft menus using the freshest local seafood, seasonal ingredients, and global culinary influences that leave every guest thoroughly impressed. For those looking to host a special event, Palm Beach's stunning restaurant spaces and private dining rooms provide an elegant and unforgettable backdrop that elevates any celebration. Simply put, whether you're marking a milestone, reconnecting with loved ones, or simply indulging in a world-class meal, Palm Beach's fine dining scene never disappoints.</p>

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

       ))}



       </div>
      
      
      
    </div>
  )
}

export default Dining;
