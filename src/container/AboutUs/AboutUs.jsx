import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.S} alt='S Letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img_reverse'/>
        <p className='p__opensans_2'>At Savantè, we're passionate about providing an unique fine dining experience. From our world-renowned Michelin-starred chefs to our elegant atmosphere, we strive to exceed your expectations with every visit.</p>
        <button className='custom__button'>Learn More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans_2'>Since 1995, Savantè has been redefining the fine dining experience. From our humble beginnings as a small bistro to our Michelin-starred reputation today, we're proud to serve our guests with passion and excellence.</p>
        <button className='custom__button'>Learn More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
