import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/SideBar.css'; // Importing the sidebar styles

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>Close</button>
      <Link to="/" className="sidebar-link"> {/* Use Link for navigation */}
        <button className="dashboard-btn">Dashboard</button>
      </Link>
      <button className="notifications-btn">Notifications</button>
      <button className="search-btn">Search</button>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
