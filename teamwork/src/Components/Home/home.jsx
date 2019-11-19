import React from 'react';
import image from '../../Assets/tm_network.png';
import Button from '../Helpers/Button/button';

const homeTwo = () => (
  <section className='tm-home'>
    <img src={image} alt='teamwork network' className='tm-img-home' />
    <div className='tm-interact-home'>
      <h1>
        Interact <span className='tm-color-word'>With</span> Your Colleagues
      </h1>
      <div className='tm-home-buttons'>
        <a href='/articles'>
          <Button classname='tm-btn-info btn-home' writeup='Create Article' />
        </a>
        <a href='/gifs'>
          <Button classname='tm-btn-info btn-home' writeup='Post Gif' />
        </a>
      </div>
    </div>
  </section>
);

export default homeTwo;
