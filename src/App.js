import React, { useState } from 'react';
import HomePage from './pages/homePage';
import Header from './components/Header'; // Ensure the correct import path
import Sidebar from './components/SideBar'; // Import the Sidebar component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header title="Wits Venue Management" toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <HomePage />
    </div>
  );
}

export default App;
