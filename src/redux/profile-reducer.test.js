import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: '0',},
        {id: 2, message: 'It\'s my first post', likesCounts: '15',},
        {id: 3, message: 'Yo', likesCounts: '31',},
    ],
}

test('length of posts should be incremented', () => {
    let action = addPost('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    let action = addPost('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('it-kamasutra.com')
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});