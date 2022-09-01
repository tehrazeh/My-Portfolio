import s from './Header.module.css';
import NavButton from './NavButton/NavButton'


function Header(props) {

  let navButtons = props.navBar.navButtons.map( element => {
    return <NavButton navButton={element} key={element.id}/>
  })

  return (
    <div className={s.Header}>
        {navButtons}
    </div>
  );
}

export default Header;
