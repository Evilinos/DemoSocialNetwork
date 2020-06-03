import React from 'react';
import style from './Post.module.css'

const MyPosts = (props) => {
    return (
        <div className={style.item}>
            <img alt='avatar' src='https://thewallpaper.co/wp-content/uploads/2017/08/disney-action-macbook-warrior-futuristic-hd-abstract-wallpapers-alien-backgrounds-aliens-fighting-adventure-avatar-mobile-scifi-free-images-fantasy.jpg' />
            {props.message}
            <div><span>Like: {props.likesCounts}</span></div>
        </div>
    )

}

export default MyPosts