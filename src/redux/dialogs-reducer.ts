const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'John',},
        {id: 2, name: 'Connor',},
        {id: 3, name: 'Alex',},
        {id: 4, name: 'Lucon',},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How are you?',},
        {id: 3, message: 'Yo',},
    ] as Array<MessageType>,
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export const sendMessage = (newMessageText: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer