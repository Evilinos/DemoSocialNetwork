import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCounts: '0',},
                {id: 2, message: 'It\'s my first post', likesCounts: '15',},
                {id: 3, message: 'Yo', likesCounts: '31',},
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'John',},
                {id: 2, name: 'Connor',},
                {id: 3, name: 'Alex',},
                {id: 4, name: 'Lucon',},
            ],
            messages: [
                {id: 1, message: 'Hi',},
                {id: 2, message: 'How are you?',},
                {id: 3, message: 'Yo',},
            ],
            newMessageText: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("Не назначен Subscriber")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
}

export default store