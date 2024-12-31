import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './components/Users';
import DetailedUserPage from './components/DetailedUserPage'
import NavBar from './components/NavBar';
import About from './components/About';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<DetailedUserPage />} />
      </Routes>
      <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;