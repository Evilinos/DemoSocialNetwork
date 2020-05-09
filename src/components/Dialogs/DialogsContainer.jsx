import React from "react"
import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
    React.memo,
)(Dialogs)