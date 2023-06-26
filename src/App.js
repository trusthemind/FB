import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Signup from './components/SignUp';
import Home from "./components/Home"
import Login from './components/LogIn';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='sign-up' element={<Signup/>}/>
        <Route path='log-in' element={<Login/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
