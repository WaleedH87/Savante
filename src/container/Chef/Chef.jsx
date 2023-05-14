import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="A Word from Our Chef" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans_2'>At Savantè, we believe that every dish is an opportunity to create something </p>
        </div>
        <p className='p__opensans_2'>truly extraordinary. We use only the freshest ingredients and the most innovative techniques to craft dishes that are as beautiful as they are delicious.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans_2'>Head Chef</p>
        <img src={images.sign} alt='signature'/>
      </div>
    </div>
  </div>
);

export default Chef;
