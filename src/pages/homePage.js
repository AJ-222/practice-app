import React from 'react';
import '../styles/homePage.css';
import Header from '../components/Header';
import MainIcon from '../components/mainIcon';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      
      <main className="main-content">
       <MainIcon iconClass="fa-solid fa-house icon-img" text="BOOK A VENUE" />
        <MainIcon iconClass="fa-solid fa-calendar icon-img" text="VIEW CALENDAR" />
        <MainIcon iconClass="fa-solid fa-clipboard-check icon-img" text="MY BOOKINGS" />
        <MainIcon iconClass="fa-solid fa-file-alt icon-img" text="FILE A REPORT" /> 
      </main>
    </div>
  );
};

export default HomePage;
