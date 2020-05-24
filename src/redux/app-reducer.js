import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const REQUEST_ERROR = 'app/REQUEST_ERROR'

let initialState = {
    initialized: false,
    error: null,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        case REQUEST_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

export const initializedSucess = () => ({type: INITIALIZED_SUCCESS })
export const requestError = (error) => ({type: REQUEST_ERROR, error })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then( () => {
        dispatch(initializedSucess())
    })
}

export default appReducer