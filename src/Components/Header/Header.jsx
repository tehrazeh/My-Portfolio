import s from './Header.module.css';
import NavButton from './NavButton/NavButton'
import React from 'react'


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonInfo: [
        { id: 1, label: 'Projects' },
        { id: 2, label: 'Resume' },
        { id: 3, label: 'Contact' },
      ]
    }
  }
  render() {
    let navButtons = this.state.buttonInfo.map(element => {
      return <NavButton navButton={element} key={element.id} />
    })
    return (
      <div className={s.Header}>
        {navButtons}
      </div>
    )
  }
}

export default Header;
