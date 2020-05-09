import React from "react"
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilities/validators/validators";

const maxLength100 = maxLengthCreator(100)

let SendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               validate={[required, maxLength100]}
               name={'newMessageText'}
               placeholder={'Enter your message'}/>
        <button>Send</button>
    </form>
}


export default reduxForm({form: 'dialogSendMessageForm'})(SendMessageForm)