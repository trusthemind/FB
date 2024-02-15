import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Signup from './pages/SignUp'
import Home from './components/Home'
import Login from './pages/LogIn'
import Layout from './components/Layout'
import Testimonials from './pages/Testimonials'
import 'normalize-scss'
import Team from './pages/Team'
import Works from './pages/Works'
import Contacts from './pages/Contacts'
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="sign-up" element={<Signup />} />
                    <Route path="team" element={<Team />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="works" element={<Works />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="log-in" element={<Login />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/error" element={<Error />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
