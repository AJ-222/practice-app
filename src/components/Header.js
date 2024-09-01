import React from 'react';
import '../styles/Header.css'; // Ensure the correct path for your CSS
import logo from '../assets/logo.png'; // Adjust the path as needed

const Header = ({ title, toggleSidebar }) => {
  return (
    <header className="app-header">
      
      <i onClick={toggleSidebar} className="fa-solid fa-bars icon-img"></i>
      <h1>{title}</h1>
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
