import s from './Header.module.css';
import NavButton from './NavButton/NavButton'


function Header(props) {

  let navButtons = props.navBar.navButtons.map( element => {
    return <NavButton href={`/${element.label.toLowerCase()}`} key={element.id} label={element.label} />
  })

  return (
    <div className={s.Header}>
        {navButtons}
    </div>
  );
}

export default Header;
