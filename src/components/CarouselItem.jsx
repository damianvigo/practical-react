import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://placeimg.com/640/480/people' alt='People' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details-icons' src={playIcon} alt='Play' />
        <img className='carousel-item__details-icons' src={plusIcon} alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2020 16+ 144 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
