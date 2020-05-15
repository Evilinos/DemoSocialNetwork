import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "a304db01-c89f-42a9-9f04-4fcf8746296e"},
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 25) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
            .then(response => response.data);
    },
    updatePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}

