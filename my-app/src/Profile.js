// src/Profile.js
import React from 'react';

const Profile = ({ member }) => {
    return (
        <div className="profile">
            <img src={member.photo} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
        </div>
    );
};

export default Profile;