import { Link } from "react-router-dom";
// import { useState,useEffect } from "react"; 
import "./Home.css";


const HomePage = () => {

  return (
    <>  
      <div className="home-container">
        <marquee> <span className="txt">"Rev Up Life, Settle In Style: Your Ride, Your Stay – Welcome Home!"</span> </marquee>
        {/* main content */}
          <main className="main">
            <ul className="site-navigation">
              <li>
                <Link to="/pg-rental/home">PG Rental</Link>
              </li>

              <li>
                <Link to="/bike-rental/home">Bike Rental</Link>
              </li>
            </ul>
          </main>
        </div>
    </>
  );
};

export default HomePage;
