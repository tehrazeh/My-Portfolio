const ACTIVE_BUTTON_TOGGLE = 'ACTIVE_BUTTON_TOGGLE';

const initialState = {
    activeButton: null
}

const headerReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTIVE_BUTTON_TOGGLE:
            return {activeButton : action.buttonId}
        default: return state
    }
}


export const toggleActiveButton = (buttonId) => ({
    type: ACTIVE_BUTTON_TOGGLE,
    buttonId
})

export default headerReducer