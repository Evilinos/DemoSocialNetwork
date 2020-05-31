import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

// constants
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING'
const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

// state
let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    isFetching: false as boolean,
    captchaUrl: null as null | string,
}
export type InitialStateType = typeof initialState

// reducer
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, captchaUrl: action.captchaUrl}
        default:
            return state
    }
}

// actions
type SetAuthUserDataActionPayloadType = {
    id: number|null
    email: string|null
    login: string|null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData =
    (id: number|null, email: string|null, login: string|null, isAuth: boolean):SetAuthUserDataActionType => ({
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    })


type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: string
}
export const getCaptchaUrlSuccess = (captchaUrl: string):GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})

// thunks
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(toggleIsFetching(false))
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
            dispatch(toggleIsFetching(false))
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
        dispatch(toggleIsFetching(false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer