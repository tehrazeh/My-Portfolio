import s from './Header.module.css';
import NavButton from './NavButton/NavButton'
import React from 'react'
import homeBtn from './Images/home.png'
import {NavLink} from 'react-router-dom'
import {useState} from 'react';


const Header = () => {

  const [appState, changeState] = useState({
    buttonInfo: [
      { id: 1, label: 'Projects' },
      { id: 2, label: 'Resume' },
      { id: 3, label: 'Contact' },
    ]
  })

  let navButtons = appState.buttonInfo.map(element => {
    return <NavButton navButton={element} key={element.id} />
  })

  return (   
      <>
        <div className={s.headerHome}>
          <div className={s.homeButtonBox}>
          <NavLink  to='/'>
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
