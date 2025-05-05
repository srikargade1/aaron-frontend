import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Library from './pages/Library';
import Settings from './pages/Settings';
import NavBar from './components/NavBar';
import './App.css'; 

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

