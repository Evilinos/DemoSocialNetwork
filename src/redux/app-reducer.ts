// @ts-ignore
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const REQUEST_ERROR = 'app/REQUEST_ERROR'

let initialState = {
    initialized: false as boolean,
    error: null as string | null,
}
export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        case REQUEST_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

type InitializedSuccessActionType = {type: typeof INITIALIZED_SUCCESS}
type RequestErrorActionType = {type: typeof REQUEST_ERROR, error: string}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS })
export const requestError = (error: string):RequestErrorActionType => ({type: REQUEST_ERROR, error })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then( () => {
        dispatch(initializedSuccess())
    })
}

export default appReducer