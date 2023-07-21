import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import "./style.scss"

const Home = () => {

    return (
        <>
           <Card className='Entry'>
            <h1>Tatto Art Studio</h1>
            <p>designed and created by Felix Melnyk</p>
           </Card>
           <Card className='About'>
            
           </Card>
        </>
    );
}

export default Home;
