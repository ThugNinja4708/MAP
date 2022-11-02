import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {Route, Routes} from 'react-router-dom';
import StudentNav from './components/StudentNav';
function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Navbar' element={<StudentNav />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
