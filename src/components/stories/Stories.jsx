import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.scss';

const Stories = () => {
    const { currentUser } = useContext(AuthContext);

    // TEMPORARY
    const stories = [
        {
            id: 1,
            name: 'Jhon Doe',
            img: 'https://images.unsplash.com/photo-1670787053502-ad4b741ef37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 2,
            name: 'Jhon Doe',
            img: 'https://images.unsplash.com/photo-1670787053502-ad4b741ef37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 3,
            name: 'Jhon Doe',
            img: 'https://images.unsplash.com/photo-1670787053502-ad4b741ef37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 4,
            name: 'Jhon Doe',
            img: 'https://images.unsplash.com/photo-1670787053502-ad4b741ef37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
    ];

    return (
        <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} alt='' />
                <span>New Stories</span>
                <button>+</button>
            </div>
            {stories.map((story) => (
                <div className='story' key={story.id}>
                    <img src={story.img} alt='' />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Stories;
