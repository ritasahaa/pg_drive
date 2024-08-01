import React, { useContext ,useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BikeContext } from "../context/BikeContext";
import "./Card.css";

const Card = ({ele }) => {
let price2=(ele.price)*2
  const [name,setName]=useState(null)
  const navigate = useNavigate();
  // accessed context state and stateState variables and function for context manipulation
  const { setBikeData } = useContext(BikeContext);
 useEffect(()=>{
  const name=  localStorage.getItem("name")
  setName(name);
  },[])
  // console.log("CONTEXT DATA...", bikeData);

    const handleViewDetails = () => {
    navigate(`/bike-rental/${ele._id}/view/details`);
    // stored data in context through setState function
    // setBikeData({ ele._id, title, description, imageUrl });
  };

  return (
    <div className="card bg-white shadow-md">
      <img src={ele.imageUrl} alt="" className="h-40 w-full"/>
      <div className="card-content space-y-2">
        <h2>{ele.name}</h2> 
        {/* <p className="heading">{ele.price}</p> */}
        {/* <p className="price-tag">&#x20B9; {price} - &#x20B9; {price2} / day</p> */}
       {ele?.type === 'Bike' && (
          <div>
            <p id="price-tag">&#x20B9; {ele.price} - &#x20B9; {price2} / day</p>
          </div>
        )} 
       {ele?.type === 'Pg' && (
          <div>
            <p id="price-tag">&#x20B9; {ele.price} - &#x20B9; {price2} / day</p>

          </div>
        )} 

        <div className="card-btn">
          <button id="card-btn2" onClick={handleViewDetails}>
          <span>&#x1F441;</span> View
          </button>
          <Link to={ name ? "/rent" : "/login"}><button onClick={()=> localStorage.setItem("rent","rent")}>Rent</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
