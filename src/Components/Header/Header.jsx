import s from './Header.module.css';
import React from 'react'
import homeBtn from './Images/home.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Header = (props) => {

  const [appState, changeState] = useState(() => {
    return ({
      activeButton: null,
      buttons: [
        { id: 0, label: 'Projects' },
        { id: 1, label: 'Resume' },
        { id: 2, label: 'Contact' },
      ]
    })

  })

  function toggleActive(index) {
    changeState({ ...appState, activeButton: appState.buttons[index] })
    props.toggleActiveHeaderButton(index)

  }

  function toggleActiveStyle(index) {
    return ((appState.buttons[index].id === props.activeButton ) ? 'navBarButtonActive' : 'navBarButton')
  }

  const navButtons = appState.buttons.map((element, index) => {
    return (
      <NavLink to={`/${element.label.toLowerCase()}`} key={element.id}>
        <button className={s[toggleActiveStyle(index)]}
          onClick={() => {
            toggleActive(index)
          }}>
          <img className={s.navBarImage} alt='navbar pic'
            src={require(`../Header/Images/${element.label.toLowerCase()}.png`)} />
          <p className={s.navBarButtonDescription}>{element.label}</p>
        </button>
      </NavLink>
    )
  })




  return (
    <>
      <div className={s.headerHome}>
        <div className={s.homeButtonBox}>
          <NavLink to='/'>
            <img className={s.homeButton} alt='home button' src={homeBtn}
              onClick={() => {
                toggleActive(-1)
              }} />
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
