import { toggleActiveButtonAC } from "../../Redux/header-reducer"
import {connect} from 'react-redux'
import Header from './Header'






const mapStateToProps = (state) => {
    return {
        activeButton: state.header.activeButton
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        toggleActiveButton: (buttonId) => {
            dispatch(toggleActiveButtonAC(buttonId))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer