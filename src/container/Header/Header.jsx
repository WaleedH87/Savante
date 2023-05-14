import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header'>
    <div className='app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Savor the Finest Cuisine' />
        <h1 className='app__header-h1'>The Art of</h1>
        <h1 className='app__header-h1'>Fine Dining</h1>
        <p className='p__opensans_2' style={{ margin: '2rem 0' }}>
        Indulge in exceptional fine dining at Savantè, where our Michelin-starred chefs meticulously craft exquisite dishes with only the freshest ingredients. From our elegant atmosphere to unparalleled service, savor the finest cuisine, explore our menu and book your reservation today.
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header pic'/>
      </div>
    </div>

    <a href="#about">
      <div className='app__wrapper_scroll_img'>
        <img src={images.Scroll} alt='scroll'/>
      </div>
    </a> 

  </div>
);

export default Header;
