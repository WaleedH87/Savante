import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className='p__opensans'>Mon-Sat: 11:00 - 23:30</p>
        <p className='p__opensans'>Sun: 12:00 - 22:00</p>
      </div>
      <a href='https://goo.gl/maps/Rt2RP6Kcd3sCL8F88' target="_blank" rel="noopener noreferrer">
        <button className='custom__button' style={{ marginTop: '2rem' }}>Directions</button>
      </a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find-us' />
    </div>
  </div>
);

export default FindUs;
