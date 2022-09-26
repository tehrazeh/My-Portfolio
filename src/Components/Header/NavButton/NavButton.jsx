import {NavLink} from 'react-router-dom';
import s from './NavButton.module.css';

const NavButton = (props) => {

    return (
            <NavLink to={`/${props.navButton.label.toLowerCase()}`}>
            <button className={s.navBarButton}>
                <img className={s.navBarImage} alt='navbar pic'
                src={require(`../Images/${props.navButton.label.toLowerCase()}.png`)} />
                <p className={s.navBarButtonDescription}>{props.navButton.label}</p>
            </button>
            </NavLink>
        
    )
}

export default NavButton