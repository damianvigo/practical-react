import React from 'react';
import '../assets/styles/components/Search.scss';
import classNames from 'classnames'; // npm install classnames

const Search = ({ isHome }) => {

  const inputStyle = classNames('input', {
    isHome, //validacion para el input con class 70%
  });

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input className={inputStyle} type='text' placeholder='Buscar...' />
    </section>
  );
};

export default Search;
