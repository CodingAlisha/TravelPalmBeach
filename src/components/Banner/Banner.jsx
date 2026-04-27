import React from 'react'
import './Banner.css';

// REUSABLE BANNER 

const Banner = ({img, title}) => {
    return (
        <div
            className='banner'
            style={{ backgroundImage: `url(${img})` }}
        >
            <h1 className='bannerContent'>{title}</h1>
        </div>
    );
}

export default Banner;