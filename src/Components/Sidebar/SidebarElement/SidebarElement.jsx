import { NavLink } from 'react-router-dom';
import s from './SidebarElement.module.css';
const SidebarElement = (props) => {

    //This ternary operator is needed because some buttons of sidebar
    //do not redirect to other pages and therefore navlink is preferred to maintain SPA style
    let imageButton = 
    <button className={s.sideBarButton}>
        <img className={s.sideBarImage} src={require(`../Images/${props.sideButton.label.toLowerCase()}.png`)} 
        alt='sidebar pic'/>
        <h3 className={s.buttonDiscriptionHover}>{props.sideButton.label}</h3>
    </button>
    let layout
    props.sideButton.redirect === 1 ?
        layout = <a href={props.sideButton.link}>{imageButton}</a> :
        layout = <NavLink to={props.sideButton.link}>{imageButton}</NavLink>
    return (
        <div>
            {layout}
        </div>

    )
}

export default SidebarElement