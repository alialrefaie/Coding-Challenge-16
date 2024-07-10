// src/Gallery.js
import React from 'react';
import Profile from './Profile';

const Gallery = ({ teamMembers }) => {
    return (
        <div className="gallery">
            {teamMembers.map(member => (
                <Profile key={member.id} member={member} />
            ))}
        </div>
    );
};

export default Gallery;