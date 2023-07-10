import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <>
           <div>
            <h1>Tatto Art</h1>
            <h3></h3>
           </div>
        </>
    );
}

export default Home;
