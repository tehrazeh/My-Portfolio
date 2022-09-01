import {NavLink} from 'react-router-dom';

const NavButton = (props) => {
    return (
        <button>
            <NavLink to={props.href}>
                {props.label}
            </NavLink>

        </button>

    )
}

export default NavButton