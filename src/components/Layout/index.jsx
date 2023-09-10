import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth, logOut } from '../../firebase';
import { changeTheme } from "../services/action";
import { connect } from "react-redux";
import { Header, Footer } from "antd/es/layout/layout";
import { Switch } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

function Layout({ theme, changeTheme }) {
    const [currentUser, setcurrentUser] = useState(null);
    const [themeState, setthemeState] = useState("light");
    const user = auth.currentUser;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setcurrentUser(currentUser);
        });
        setthemeState(changeTheme(window.localStorage.getItem("theme")));

        return () => {
            unsubscribe();
        };
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
                {/* style={{ filter: "invert(100%)" }} */}
                <NavLink to={"/"}>
                    <img src={process.env.PUBLIC_URL + "img/icon.png"} alt="Logo" />
                </NavLink>
                <div className="user-switch">
                    <Switch
                        className="antd-switch"
                        size="small"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />

                    {currentUser ? <p>Welcome, {user.displayName ?
                        user.displayName : user.email}</p> : <NavLink to={"log-in"}>Log In</NavLink>}
                    {user && <NavLink to={"/"} onClick={() => logOut()}>Log Out <LogoutOutlined /></NavLink>}
                </div>
            </Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer>
                footer
                <NavLink to={"sign-up"}>sign in</NavLink>
            </Footer>
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
