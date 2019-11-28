import React from 'react';
import image from '../../Assets/tm_network.png';
import excellence from '../../Assets/tm-excellence.png';
import passion from '../../Assets/tm-passion.png';
import integrity from '../../Assets/tm-ethics.png';
import collaboration from '../../Assets/tm-collaborate.png';
import Button from '../Helpers/Button/button';
import Card from '../../Cards/coreValue';
import './index.css';

const home = () => (
  <>
    <section className='tm-home'>
      <section className='tm-home-greeting'>
        <div className='tm-img-home'>
          <img src={image} alt='teamwork network' />
        </div>
        <div className='tm-desc-home'>
          <h1>
            Growing <br />
            <span className='tm-color-word'>Together</span>
          </h1>
          <a href='/auth/signin'>
            <Button classname='tm-btn-info' writeup='Get Started' />
          </a>
        </div>
      </section>
      <section className='tm-value-card-container'>
        <Card title='Excellence' icon={excellence}>
          <p>We believe in excellence, it is our watch word</p>
        </Card>
        <Card title='Passion' icon={passion}>
          <p>We believe in excellence, it is our watch word</p>
        </Card>
        <Card title='Integrity' icon={integrity}>
          <p>We believe in excellence, it is our watch word</p>
        </Card>
        <Card title='Teamwork' icon={collaboration}>
          <p>We believe in excellence, it is our watch word</p>
        </Card>
      </section>
    </section>
  </>
);

export default home;
