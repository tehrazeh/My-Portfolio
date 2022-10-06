import { NavLink } from 'react-router-dom';
import s from './SidebarElement.module.css';
import { toggleActiveButton } from "../../../Redux/header-reducer"
import {connect} from 'react-redux'
const SidebarElement = (props) => {

    //This ternary operator is needed because some buttons of sidebar
    //do not redirect to other pages and therefore navlink is preferred to maintain SPA style
    let imageButton = 
    <button className={s.sideBarButton} onClick={() => {
        props.toggleActiveButton(null)
    }}>
        <img className={s.sideBarImage} src={require(`../Images/${props.sideButton.label.toLowerCase()}.png`)} 
        alt='sidebar pic'/>
        <p className={s.buttonDiscription}>{props.sideButton.label}</p>
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

// this block is only needed to stop highlighting the active header button if sidebar button was clicked
// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleActiveButton: (buttonId) => {
//             dispatch(toggleActiveButton(buttonId))
//         }
//     }
// }

export default connect(null, {toggleActiveButton})(SidebarElement)