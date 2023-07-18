import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { changeTheme } from "../services/action";
import { connect } from "react-redux";

function Layout({ theme, changeTheme }) {
    const [currentUser, setcurrentUser] = useState(null);
    const [themeState, setthemeState] = useState(false);
    const user = auth.currentUser;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setcurrentUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const toggleTheme = () => {
        setthemeState(!themeState)
        themeState ? changeTheme("light") : changeTheme("dark");
        console.log(themeState);
    }

    return (
        <>
            <header>
                {/* style={{ filter: "invert(100%)" }} */}
                <img src={process.env.PUBLIC_URL + "img/icon.png"} alt="Logo" />
                <div>
                    <label htmlFor="theme">
                        <input
                            type="checkbox"
                            id="theme"
                            onChange={toggleTheme}
                            checked={theme === "dark" ? true : false}
                        />
                        <span></span>
                    </label>
                    {currentUser && <p>Welcome Home, {currentUser.email}</p>}
                </div>
            </header>
            <main>
            <Outlet></Outlet>
            </main>
            <footer>
                footer
                <NavLink to={"sign-up"}>sign in</NavLink>
            </footer>
        </>
    );
}

const mapState = (state) => {
    return {
        theme: state.theme
    };
};

const mapDispatch = (dispatch) => {
    return {
        changeTheme: (val) => dispatch(changeTheme(val))
    };
};

export default connect(mapState, mapDispatch)(Layout);
