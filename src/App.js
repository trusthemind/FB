import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Signup from './pages/SignUp';
import Home from "./components/Home"
import Login from './pages/LogIn';
import Layout from './components/Layout';
import Testimonials from './pages/Testimonials';
import "normalize-scss";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='sign-up' element={<Signup />} />
          <Route path='testimonials' element={<Testimonials />} />
          <Route path='log-in' element={<Login />} />
          <Route path='*' element={<Error />} />
          <Route path='/error' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
