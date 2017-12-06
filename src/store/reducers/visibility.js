import * as actionTypes from '../actions'

const initialState = {
    test: 'yo',
    why: 'yo'
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {

        case actionTypes.VIS_INIT:
            return {
                ...state,
                ...action.items
            }

        default: return state
    }
}

export default reducer