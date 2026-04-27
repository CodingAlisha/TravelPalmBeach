import React from "react";
import './Button.css'



const Button = ({link, children, className='',}) => {

  return (
    <a 
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className={className}
    >
        {children}

    </a>
  );
};

export default Button;
