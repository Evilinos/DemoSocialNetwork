import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import SendMessageForm from "./sendMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id}/>)

    let onSendMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <SendMessageForm onSubmit={onSendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs