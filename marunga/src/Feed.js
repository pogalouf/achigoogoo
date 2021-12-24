import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';


function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic= "images/profile1.png"
            message= "Wow this works"
            timestamp= "This is a timestamp"
            username= "Paul Galufu"
            image="images/fitin.png"/>
            <Post  profilePic= "images/profile1.png"
            message= "Wow this works"
            timestamp= "This is a timestamp"
            username= "Paul Galufu"
            image=""/>
            <Post  profilePic= "images/profile1.png"
            message= "Wow this works"
            timestamp= "This is a timestamp"
            username= "Paul Galufu"
            image="images/mediaM.png"/>
            <Post  profilePic= "images/profile1.png"
            message= "Wow this works"
            timestamp= "This is a timestamp"
            username= "Paul Galufu"
            image="images/mediaM.png"/>

        </div>
    )
}

export default Feed