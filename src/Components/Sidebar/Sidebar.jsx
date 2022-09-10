import s from './Sidebar.module.css';
import SidebarElement from './SidebarElement/SidebarElement'
import React from 'react'


class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sideButtons: [
        { id: 1, label: 'GitHub', link: 'https://github.com/tehrazeh', redirect: 1 },
        { id: 2, label: 'Diploma', link: '/diploma', redirect: 0 },
        { id: 3, label: 'LinkedIn', link: 'https://www.linkedin.com/in/danilatolstoukhov/', redirect: 1 }
      ]
    }
    
  }

  render () {
    let sidebarElements = this.state.sideButtons.map(element => {
      return <SidebarElement sideButton={element} key={element.id} />
    })    
    return (
      <div className={s.Sidebar}>
        {sidebarElements}
      </div>
    )
  }
}

export default Sidebar;
