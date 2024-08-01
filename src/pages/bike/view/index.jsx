import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { BikeContext } from "../../../context/BikeContext";
// import { PgContext } from "../../../context/PgContext";
import "./index.css";

const BikeViewDetailPage = ({details}) => {
  const detail = details;
  // console.log(detail)
  // let { bikeId } = useParams();
  // const { bikeData } = useContext(BikeContext);
  // const { id = "", title = "", description = "", imageUrl = "" } = bikeData;
  // console.log("bikeData", bikeData);

  const [content, setContent] = useState("description");
  const handleButtonClick = (contentType) => {
    setContent(contentType);
  };

  return (
    <div className="view-container">
      {/* <div className="view-content">
        <h1>{title}</h1>
        <img src={`/image/${imageUrl}`} alt={title} id="view-image" />
      </div> */}

      <div className="coupon-container">
        <h3>Discount Coupon</h3>
        <div className="coupon-box">
          <div className="coupon-offer">
            <p>
              Flat 20% Cashback On <br />
              All Bike Rentals
            </p>
            <button>Get This Code</button>
          </div>

          <div className="coupon-offer">
            <p>
              Flat 10% Cashback On <br />
              All Scooty Rentals
            </p>
            <button>Get This Code</button>
          </div>
        </div>
      </div>

      <div className="view-container-detail">
        <div className="view-details">
          <a onClick={() => handleButtonClick("description")}>Description</a>
          <a onClick={() => handleButtonClick("specification")}>
            Specification
          </a>
          <a onClick={() => handleButtonClick("review")}>Review</a>
        </div>
        <div className="view-details">
          {content === "description" && <DescriptionContent />}
          {content === "specification" && <SpecificationContent />}
          {content === "review" && <ReviewContent />}
        </div>
      </div>
      <Link to="/bike-rental/rent">
        {" "}
        <button id="rent">Rent</button>{" "}
      </Link>
      <DescriptionContent details={detail}/>
    </div>
  );
};

const DescriptionContent = ({details}) => {
  const detail = details;
  console.log("detail",detail)

  return (
    <div className="view-table view-table-desc">
      <p id="view-heading">
        Dealer Timings: <span>07:00 AM - 09:00 PM</span>
      </p>
      <p>
        Honda is a 125 cc commuter motorcycle by Honda. It is powered by a
        124 cc engine that churns out 10 bhp of power and 11 Nm of torque. With
        a great mileage of 65 kmpl the fuel tank capacity is 11 ltrs. It has 4
        gears and front disc brakes. Ignition is self-start.
      </p>
      <h4>Deposit Terms</h4>
      <p id="view-condition">
        Deposit Amount: <b>Rs. 1,000</b>
      </p>
      <p>
        1.One Helmet will be given with the bike. Another will be available on
        request.
      </p>
      <p>
        2.Security Deposit is refundable once we receive the bike in proper
        condition.
      </p>
      <p>
        3.You need to submit an original ID proof and a photocopy of your
        driving license.
      </p>
    </div>
  );
};
const SpecificationContent = () => {
  return (
    <div className="view-table">
      <table>
        <tr>
          <th>Brand</th>
          <td>Honda</td>
        </tr>

        <tr>
          <th>Model</th>
          <td>CB Shine</td>
        </tr>

        <tr>
          <th>Manufacturing Year</th>
          <td>2001</td>
        </tr>

        <tr>
          <th>Body type</th>
          <td>Motorcycles</td>
        </tr>

        <tr>
          <th>petrol</th>
          <td>Fuel</td>
        </tr>

        <tr>
          <th>Engine Capacity</th>
          <td>125 CC</td>
        </tr>
      </table>
    </div>
  );
};
const ReviewContent = () => {
  return (
    <div className="view-table review">
      <p>
        <i className="fa-solid fa-user"></i>
        Hanumantharao
        <span>&#9733; &#9733; &#9733; &#9734; &#9734; </span>
        24.02.24
      </p>

      <p>
        <i className="fa-solid fa-user"></i>
        Subramaniyamm swami
        <span>&#9733; &#9733; &#9733; &#9734; &#9734; </span>
        23.02.24
      </p>

      <p>
        <i className="fa-solid fa-user"></i>
        Aryan Upadhyay
        <span>&#9733; &#9733; &#9733; &#9734; &#9734;</span>
        20.02.24
      </p>

      <p>
        <i className="fa-solid fa-user"></i>
        Viswanjali Madhukar
        <span>&#9733; &#9733; &#9733; &#9734; &#9734; </span>
        10.01.24
      </p>

      <p>
        <i className="fa-solid fa-user"></i>
        Rita kumari sah
        <span>&#9733; &#9733; &#9733; &#9734; &#9734; </span>
        04.01.24
      </p>
    </div>
  );
};
export default BikeViewDetailPage;
