import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';

const Home = () => {
    const user = auth.currentUser;

    return (
        <>
            {user ? <p>Welcome Home, {user.email}</p> : <p>NO USER</p>}
            <NavLink to='/sign-up'>Sign Up</NavLink>
            <br />
            <NavLink to='/log-in'>Log In</NavLink>
        </>
    );
}

export default Home;
