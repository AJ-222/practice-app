import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/homePage.css';
import MainIcon from '../components/mainIcon'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="main-content">
        <MainIcon iconClass="fa-solid fa-house icon-img" text="BOOK A VENUE" />
        <MainIcon iconClass="fa-solid fa-calendar icon-img" text="VIEW CALENDAR" />
        <MainIcon iconClass="fa-solid fa-clipboard-check icon-img" text="MY BOOKINGS" />
        <Link to="/reports">  {/* Wrap MainIcon with Link to navigate to /reports */}
          <MainIcon iconClass="fa-solid fa-file-alt icon-img" text="FILE A REPORT" />
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
