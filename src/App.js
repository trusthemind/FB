import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Signup from './components/SignUp';
import Home from "./components/Home"
import Login from './components/LogIn';
import { auth } from './firebase';

function App() {
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
        {currentUser && <p>Welcome Home, {currentUser.email}</p>}
      </header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='log-in' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
