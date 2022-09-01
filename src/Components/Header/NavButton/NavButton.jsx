import {NavLink} from 'react-router-dom';

const NavButton = (props) => {

    return (
        <button>
            <NavLink to={`/${props.navButton.label.toLowerCase()}`}>
                {props.navButton.label}
            </NavLink>
        </button>

    )
}

export default NavButton