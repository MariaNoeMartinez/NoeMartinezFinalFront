import React from 'react';
import facebook from "../images/ico-facebook.png";
import instagram from "../images/ico-instagram.png";
import tiktok  from "../images/ico-tiktok.png";
import whatssap  from "../images/ico-whatsapp.png"
import dh  from "../images/DH.png"


const Footer = () => {
  return (
    <footer class="image-container">
      <a href="https://www.digitalhouse.com" target='blank'><img className = 'dhicon' src={dh} alt='DH-logo' /></a>
       <img  className='icon' src= {facebook}   alt="ico face" /> 
       <img className='icon'src={instagram}  alt="ico inst" />
       <img className='icon'src={tiktok} alt="ico tik" />
       <img className='icon'src={whatssap} alt="ico what" />
    </footer>
  )
}

export default Footer
