import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: 0},
        {id: 2, message: 'It\'s my first post', likesCounts: 15},
        {id: 3, message: 'Yo', likesCounts: 31},
    ] as Array<PostType>,
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        },
    } as ProfileType,
    status: null as null | string,
};
export type InitialStateType = typeof initialState


const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCounts: 0,
            };
            return {...state,posts: [...state.posts, newPost, ]};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        case UPDATE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state
    }
};

// Action creators
type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type setUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_USER_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});

type UpdatePhotoSuccessActionType = {
    type: typeof UPDATE_PHOTO_SUCCESS
    photos: PhotosType
}
export const updatePhotoSuccess = (photos: PhotosType): UpdatePhotoSuccessActionType => ({type: UPDATE_PHOTO_SUCCESS, photos});

// Thunks
export const getUserProfile = (id: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(id);
    dispatch(setUserProfile(response))
};
export const getUserStatus = (id: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(id);
    dispatch(setUserStatus(response))
};
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0)
        dispatch(setUserStatus(status))
};

export const updatePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.updatePhoto(file);
    if (response.resultCode === 0)
        dispatch(updatePhotoSuccess(response.data.photos))
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const id = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.resultCode === 0) {
        dispatch(getUserProfile(id))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('edit_profile', {_error: message}));
        return Promise.reject()
    }
};

export default profileReducer