import React from "react"
import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogType, MessageType} from "../../types/types";

type MapStatePropsType = {
    state: {dialogs: Array<DialogType>, messages: Array<MessageType>}
}
type MapDispatchPropsType = {
    sendMessage: (values: any) => void
}
type OwnProps = {

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogsPage,
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStateToProps, {sendMessage}),
    withAuthRedirect,
    React.memo,
)(Dialogs)