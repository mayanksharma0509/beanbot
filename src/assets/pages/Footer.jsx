import React from 'react';
import { Facebook, Twitter, Instagram, AlignCenter } from "lucide-react";

const Footer = () => {
  return (
    <footer className='footer'> 
      <div className='footerdiv '>
        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
          <Facebook className='fbicon' />
        </a>
        <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">
          <Twitter className='twiicon'  />
        </a>
        <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
          <Instagram className='insicon' />
        </a>
    
        
      </div>
      <p className='officialb'>This is Official BeanBot</p>
    </footer>
  );
};

export default Footer;
