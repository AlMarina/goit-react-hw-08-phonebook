import React from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <RiContactsBook2Fill className={css.icon_home} />
      <p className={css.text}>Welcome to our contact service!</p>
    </div>
  );
};

export default HomePage;
