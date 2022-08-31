import s from './Header.module.css';
import NavButton from './NavButton/NavButton'
let navButtonLabels = [
  {id: 1, label: 'Projects'},
  {id: 2, label: 'Resume'},
  {id: 3, label: 'About'},
  {id: 4, label: 'Contact'}
]

let navButtons = navButtonLabels.map( element => {
  return <NavButton key={element.id} label={element.label} />
})
function Header() {
  return (
    <div className={s.Header}>
        {navButtons}
    </div>
  );
}

export default Header;
