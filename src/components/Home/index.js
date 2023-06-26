import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <>
            
            <NavLink to='/sign-up'>Sign Up</NavLink>
            <br />
            <NavLink to='/log-in'>Log In</NavLink>
        </>
    );
}

export default Home;
