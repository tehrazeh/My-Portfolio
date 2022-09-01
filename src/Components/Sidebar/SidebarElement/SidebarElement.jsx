import { NavLink } from 'react-router-dom';
const SidebarElement = (props) => {

    //This ternary operator is needed because some buttons of sidebar
    //do not redirect to other pages and therefore navlink is preferred to maintain SPA style
    let layout
    props.sideButton.redirect === 1 ?
        layout = <a href={props.sideButton.link}>{props.sideButton.label}</a> :
        layout = <NavLink to={props.sideButton.link}>{props.sideButton.label}</NavLink>
    return (
        <div>
            <button>
                {layout}
            </button>
        </div>

    )
}

export default SidebarElement