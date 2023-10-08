import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth, logOut } from '../../firebase';
import { changeTheme, setUsertoState } from "../../services/action";
import { connect } from "react-redux";
import { Header, Footer } from "antd/es/layout/layout";
import { Switch } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

function Layout({ theme, changeTheme, setUsertoState, user }) {
    const [currentUser, setcurrentUser] = useState(null);
    const [themeState, setthemeState] = useState("light");
    const currUser = auth.currentUser;


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setcurrentUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        setUsertoState({ name: currentUser?.displayName, email: currentUser?.email })
    }, [currentUser]) 
    // console.log(user);
    //SET-THEME
    useEffect(() => {
        setthemeState(changeTheme(window.localStorage.getItem("theme")));
    }, [changeTheme]);


    const toggleTheme = () => {
        const tempTheme = !themeState ? "dark" : "light";
        setthemeState(!themeState);
        changeTheme(tempTheme);
        window.localStorage.setItem("theme", tempTheme);
    }

    return (
        <>
            <Header>
                <div className="entry-block">
                {/* style={{ filter: "invert(100%)" }} */}
                <NavLink to={"/"}>
                    <img src={process.env.PUBLIC_URL + "img/icon.png"} alt="Logo" />
                </NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/testimonials"}>
                                <h2 className="header-nav-link">testimonials</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/team"}>
                                <h2 className="header-nav-link">team</h2>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className="user-switch">
                    <Switch
                        className="antd-switch"
                        size="small"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                    {currentUser ? <p>Welcome, {currUser.displayName ?
                        currUser.displayName : currUser.email}</p> : <NavLink to={"log-in"}>Log In</NavLink>}
                    {currUser && <NavLink to={"/"} onClick={() => logOut()}>Log Out <LogoutOutlined /></NavLink>}
                </div>
            </Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer>
                <p>
                    Copyright © <span>{new Date().getFullYear()}</span>
                    <br />
                    <span>Fedir Melnyk</span>
                </p>
                <NavLink to={"/"}>
                    <img src={process.env.PUBLIC_URL + "img/icon.png"} alt="Logo" />
                </NavLink>
            </Footer>
        </>
    );
}

const mapState = (state) => {
    return {
        user: state.reducer.user,
        theme: state.reducer.theme
    };
};

const mapDispatch = (dispatch) => {
    return {
        changeTheme: (val) => dispatch(changeTheme(val)),
        setUsertoState: (val) => dispatch(setUsertoState(val))
    };
};

export default connect(mapState, mapDispatch)(Layout);
