import { Outlet, NavLink } from "react-router-dom";
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
                {/* style={{ filter: "invert(100%)" }} */}
                <img src={process.env.PUBLIC_URL + "img/icon.png"} />
                <div>
                    <label htmlFor="theme">
                        <input type="checkbox" id="theme" />
                        <span></span>
                    </label>
                    {currentUser && <p>Welcome Home, {currentUser.email}</p>}
                </div>
            </header>
            <NavLink to={"sign-up"}>sign in</NavLink>
            <Outlet></Outlet>
            <footer>fotter</footer>
        </>
    );
}

export default Layout;