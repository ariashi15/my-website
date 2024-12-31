import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './components/Users';
import DetailedUserPage from './components/DetailedUserPage'
import NavBar from './components/NavBar';
import About from './components/About';

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