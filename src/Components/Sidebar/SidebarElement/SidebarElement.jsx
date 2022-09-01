import {NavLink} from 'react-router-dom';
const SidebarElement = (props) => {

    //This ternary operator is needed because some buttons of sidebar
    //do not redirect to other pages and therefore navlink is preferred to maintain SPA style
    let layout = 0
    props.redirect === 1 ?
        layout = <a href={props.href}>{props.title}</a> : layout = <NavLink to={props.href}>{props.title}</NavLink>
    return (
        <div>
            <button>
                {layout}
            </button>
        </div>
    )
}

export default SidebarElement