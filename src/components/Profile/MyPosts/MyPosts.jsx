import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

let AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               validate={[required, maxLength10]}
               name={'newPostText'}
               placeholder={'Enter your text'}/>
        <button>Add Post</button>
    </form>
}

AddPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddPostForm)

const MyPosts = props => {
    let postElements = [...props.posts].reverse().map(p => <Post likesCounts={p.likesCounts} key={p.id} message={p.message}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts