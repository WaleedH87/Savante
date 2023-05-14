import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';

import { FiFacebook, FiTwitter, FiInstagram }  from 'react-icons/fi';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

      <a href="#top">
      <div className='app__wrapper_scroll_img'>
        <img src={images.top} alt='scroll'/>
      </div>
      </a> 

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans_2'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__opensans_2'>+44 160 696 0619</p>
        <p className='p__opensans_2'>+44 160 696 0620</p>
      </div>


      <div className='app__footer-links_logo'>
        <a href="#top">
          <img src={images.savante} alt='footer-logo' />
        </a>
        <p className='p__opensans_2'>"Experience gastronomic excellence and extraordinary moments in the unforgettable elegance of Savantè."</p>
        <img src={images.spoon} alt='footer-spoon' className='spoon__img' style={{ marginTop: 15 }}/>
        <div className='app__footer-links_icons'>
          <a href="#top">
            <FiFacebook />
          </a>
          <a href="#top">
            <FiTwitter />
          </a>
          <a href="#top">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className='app__footer-links_hours'>
        <h1 className='app__footer-headtext'>Opening Hours</h1>
        <p className='p__opensans_2'>Monday - Saturday:</p>
        <p className='p__opensans_2'>11:00 - 23:30</p>
        <p className='p__opensans_2'>Sunday:</p>
        <p className='p__opensans_2'>12:00 - 22:00</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans_2'>2023 Savantè. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
