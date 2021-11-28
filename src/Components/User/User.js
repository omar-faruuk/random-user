import React from 'react';
import './User.css'

const User = (props) => {
    const { name, phone, email, image, salary } = props.user;
    console.log(props.user)

    return (
        <div className="user-compo">
            <img className="img" src={image} alt="" />
            <h2>{name}</h2>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
            <p><small>Salary: ${salary}</small></p>
            <button onClick={() => props.handleAddUser(props.user)}>Add friend</button>
        </div>
    );
};

export default User;