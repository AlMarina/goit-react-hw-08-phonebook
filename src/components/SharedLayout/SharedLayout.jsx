import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { RiContactsFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthenticated,
  selectUserData,
} from '../../redux/auth/authSelectors';
import { logOutThunk } from '../../redux/auth/authSlice';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      <header className={css.page_header}>
        <div className={css.logo_box}>
          <RiContactsFill className={css.icon_header} />
          <p className={css.logo_text}>Contact service</p>
        </div>
        {authenticated && (
          <div className={css.warp}>
            <p className={css.text}>Hello, {userData.name}!</p>{' '}
            <button className={css.btn} onClick={onLogOut}>
              Log Out
            </button>
          </div>
        )}
        <nav>
          <ul className={css.nav_list}>
            <li className={css.nav_item}>
              <NavLink to="/" className={css.nav_link}>
                Home
              </NavLink>
            </li>
            {authenticated ? (
              <>
                <li className={css.nav_item}>
                  <NavLink to="/contacts" className={css.nav_link}>
                    Contact
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className={css.nav_item}>
                  <NavLink to="/login" className={css.nav_link}>
                    Login
                  </NavLink>
                </li>
                <li className={css.nav_item}>
                  <NavLink to="/register" className={css.nav_link}>
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default SharedLayout;
