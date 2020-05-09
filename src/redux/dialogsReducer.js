const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }

        default:
            return state
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer