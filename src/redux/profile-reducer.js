import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: '0',},
        {id: 2, message: 'It\'s my first post', likesCounts: '15',},
        {id: 3, message: 'Yo', likesCounts: '31',},
    ],
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCounts: 0,
            }
            return {...state, posts: [...state.posts, newPost]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case UPDATE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos }}
        default:
            return state
    }
}

// Action creators
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO_SUCCESS, photos})

// Thunks
export const getUserProfile = (id) => async (dispatch) => {
    const response = await profileAPI.getProfile(id)
    dispatch(setUserProfile(response))
}
export const getUserStatus = (id) => async (dispatch) => {
    const response = await profileAPI.getStatus(id)
    dispatch(setUserStatus(response))
}
export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0)
        dispatch(setUserStatus(status))
}

export const updatePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.updatePhoto(file)
    if (response.resultCode === 0)
        dispatch(updatePhotoSuccess(response.data.photos))
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const id = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === 0)
        dispatch(getUserProfile(id))
}

export default profileReducer