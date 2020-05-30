export type PostType = {
    id: number
    message: string
    likesCounts: number
}
export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export type PhotosType = {
    small: null | string
    large: null | string
}
export type ProfileType = {
    aboutMe: null | string,
    contacts: ContactsType,
    lookingForAJob: null | boolean,
    lookingForAJobDescription: null | string,
    fullName: null | string,
    userId: null | number,
    photos: PhotosType
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}
