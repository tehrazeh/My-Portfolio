import {NavLink} from 'react-router-dom';
import s from './NavButton.module.css';

const NavButton = (props) => {

    return (
            <NavLink to={`/${props.navButton.label.toLowerCase()}`}>
            <button className={s.navBarButton}>
                <img className={s.navBarImage} alt='navbar pic'
                src={require(`../Images/${props.navButton.label.toLowerCase()}.png`)} />
                <h3 className={s.navBarButtonDescription}>{props.navButton.label}</h3>
            </button>
            </NavLink>
        
    )
}

export default NavButton