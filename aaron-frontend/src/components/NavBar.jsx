import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import '../App.css'; 

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home" style={{ color: isActive("/home") ? "black" : "#aeb6bf" }}>
          Home
          </Link>
        </li>
        <li>
          <Link to="/settings" style={{ color: isActive("/settings") ? "black" : "#aeb6bf" }}>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/articles" style={{ color: isActive("/articles") ? "black" : "#aeb6bf" }}>
            Articles
          </Link>
        </li>
        <li>
          <Link to="/library" style={{ color: isActive("/library") ? "black" : "#aeb6bf" }}>
            Library
          </Link>
        </li>
      </ul>
    </nav>
  );
}