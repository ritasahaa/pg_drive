import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BikeContext } from "../context";
import "./Card.css";

const Card = ({ id, title, description, imageUrl,price1,price2,type }) => {
  const navigate = useNavigate();
  // accessed context state and stateState variables and function for context manipulation
  const { setBikeData } = useContext(BikeContext);

  // console.log("CONTEXT DATA...", bikeData);

  const handleViewDetails = () => {
    navigate(`/bike-rental/${id}/view/details`);
    // stored data in context through setState function
    setBikeData({ id, title, description, imageUrl });
  };

  return (
    <div className="card">
      <img src={`/image/${imageUrl}`} alt={title} />
      <div className="card-content">
        <h2>{title}</h2> 
        <p className="heading">{description}</p>
        {/* <p className="price-tag">&#x20B9; {price1} - &#x20B9; {price2} / day</p> */}
        {type === 'bike' && (
          <div>
            <p id="price-tag">&#x20B9; {price1} - &#x20B9; {price2} / day</p>
          </div>
        )}

       {type === 'pg' && (
          <div>
            <span>Price: $500/month</span>
          </div>
        )}

        <div className="card-btn">
          {/* <button id="card-btn1">Rent</button> */}
          <button id="card-btn2" onClick={handleViewDetails}>
          <span>&#x1F441;</span> View
          </button>
          <Link to="/bike-rental/rent"><button id="card-btn1">Rent</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
