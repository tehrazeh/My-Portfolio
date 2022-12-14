import s from './Header.module.css';
import React from 'react'
import homeBtn from './Images/home.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';



const Header = (props) => {

  const [appState] = useState(() => {
    return ({
      buttons: [
        { id: 0, label: 'Projects' },
        { id: 1, label: 'Resume' },
        { id: 2, label: 'Contact' },
      ]
    })

  })

  const navButtons = appState.buttons.map((element, index) => {
    return (
      <NavLink end to={`/${element.label.toLowerCase()}`} key={element.id}
        className={({ isActive }) => isActive ? s.activeLink : s.regularLink}>
        <span>{element.label}</span>
      </NavLink>
    )
  })




  return (
    <>
      <div className={s.headerHome}>
        <div className={s.homeButtonBox}>
          <NavLink to='/'>
            <img className={s.homeButton} alt='home button' src={homeBtn} />
          </NavLink>
        </div>

      </div>

      <div className={s.headerNav}>
        {navButtons}
      </div>
    </>
  )
}

export default Header;
