import React from 'react';
import '../styles/Header.css'; // Optional: for styling

import logo from '../assets/logo.png'; // Adjust the path as needed

export default function Header({ title }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
}