import { IoCloseCircle } from "react-icons/io5";
import CartPage from "../../cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BikeViewDetailPage from "../../bike/view/index"

const Detail = ({ filterData, setId, name }) => {
  const navigate = useNavigate();
  const details = filterData;
  const price1 = details[0]?.price * 2;
  return (
    <>
      <div className="flex justify-end px-10 ">
        <button
          className="flex items-center space-x-1 bg-red-500 text-white hover:bg-red-600 rounded-sm px-3 py-1"
          onClick={() => setId(null)}
        >
          <IoCloseCircle fontSize={25} />
          <h1>Close</h1>
        </button>
      </div>
      <div className="flex flex-col justify-center w-full items-center py-5">
        <h1>Detail Page</h1>
        <img src={details[0].imageUrl} />

        <div className="grid grid-cols-2 gap-3 place-items-center w-full justify-items-center px-32 ">
          <p>Name: {details[0]?.name}</p>
          <p>LOCATION: {details[0]?.location}</p>
          <p> Discount Price: {details[0]?.price}</p>
          <p>Price: {price1}</p>
        </div>
        <div className="flex items-center w-full justify-evenly px-20 pt-4">
          <button className="bg-yellow-500 text-white hover:bg-yellow-600 px-4 rounded-sm py-1 text-sm">
            Add Cart
          </button>
          <button
            className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 rounded-sm py-1 text-sm"
            onClick={() => navigate(name ? "/rent" : "/login")}
          >
            Buy Now
          </button>
        </div>
      </div>

      <BikeViewDetailPage details={details}/>


    </>
  );
};

export default Detail;
