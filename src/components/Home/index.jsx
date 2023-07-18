import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';
import "./style.scss"

const Home = () => {

    return (
        <>
           <div className='Entry'>
            <h1>Tatto Art Studio</h1>
            <h3>designed and created by Felix Melnyk</h3>
           </div>
        </>
    );
}

export default Home;
