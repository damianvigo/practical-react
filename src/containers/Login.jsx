import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2 tabindex='0'>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input onChange={handleInput} name='email' aria-label='Correo' className='input' type='text' placeholder='Correo' autofocus />
          <input
            onChange={handleInput}
            name='password'
            aria-label='Contraseña'
            className='input'
            type='password'
            placeholder='Contraseña'
          />
          <button type='submit' className='button'>
            Iniciar sesión
          </button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' name='' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
