import React from 'react'
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            image ='images/mediaM.png'
            profileSrc='images/profile1.png'
            title='Paul Galufu'/>
           <Story 
           image='images/mediaM.png'
           profileSrc='images/profile1.png'
           title='Paul Galufu'/>
            <Story 
            image='images/mediaM.png'
            profileSrc='images/profile1.png'
            title='Paul Galufu'/>
           <Story 
           image='images/mediaM.png'
           profileSrc='images/profile1.png'
           title='Paul Galufu'/>
           <Story 
           image='images/mediaM.png'
           profileSrc='images/profile1.png'
           title='Paul Galufu'/>
            
        </div>
    )
}

export default StoryReel
