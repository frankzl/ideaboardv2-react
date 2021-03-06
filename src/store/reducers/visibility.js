import * as actionTypes from '../actions'

const initialState = {}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.VIS_INIT:
            return {
                ...state,
                ...action.items
            }
        case actionTypes.VIS_ALL:
            let toggleValue = true
            if ( state[ action.title + 'Comments' ] == true ||
                state[ action.title + 'Survey' ] == true ) {
                toggleValue = false
            }
            let temp = {}
            temp[ action.title + 'Comments' ] = toggleValue
            temp[ action.title + 'Survey' ] = toggleValue
            return {
                ...state,
                ...temp
            }
        case actionTypes.VIS_COMMENTS:
            temp = {}
            if ( state[ action.title + 'Survey' ] && state[ action.title + 'Comments' ] )
                temp[ action.title + 'Survey' ] = false
            else {
                temp[ action.title + 'Comments' ] = !state[ action.title + 'Comments' ]
                temp[ action.title + 'Survey' ] = false
            }
            return {
                ...state,
                ...temp
            }
        case actionTypes.VIS_SURVEY:
            temp = {}
            if ( state[ action.title + 'Survey' ] && state[ action.title + 'Comments' ] )
                temp[ action.title + 'Comments' ] = false
            else {
                temp[ action.title + 'Survey' ] = !state[ action.title + 'Survey' ]
                temp[ action.title + 'Comments' ] = false
            }
            return {
                ...state,
                ...temp
            }
        case actionTypes.FOCUS:
            return {
                ...state,
                focus: action.id
            }
        default:
            return state
    }
}

export default reducer