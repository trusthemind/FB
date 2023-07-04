import { Outlet,NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
function Layout() {
    const [currentUser, setcurrentUser] = useState(null)
    const user = auth.currentUser;
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setcurrentUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <>
            <header>
            <img src={process.env.PUBLIC_URL + "icon.png"} alt=""/>    {currentUser && <p>Welcome Home, {currentUser.email}</p>}
            </header>
            <NavLink to='/sign-up'>Sign Up</NavLink>
            <br />
            <NavLink to='/log-in'>Log In</NavLink>
            <footer>fotter</footer>
            <Outlet></Outlet>
        </>
    );
}

export default Layout;