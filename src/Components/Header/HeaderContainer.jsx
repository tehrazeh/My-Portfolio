import { toggleActiveButton } from "../../Redux/header-reducer"
import {connect} from 'react-redux'
import Header from './Header'






const mapStateToProps = (state) => {
    return {
        activeButton: state.header.activeButton
    }
} 

// leave it as reminder, lifehack. if action creator has the same name as you define it here,
// you can omit creating the object below and just pass it to conect as object of AC'S
// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleActiveButton: (buttonId) => {
//             dispatch(toggleActiveButton(buttonId))
//         }
//     }
// }

const HeaderContainer = connect(mapStateToProps, {toggleActiveButton})(Header)

export default HeaderContainer