import Card from "./components/Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import Detail from "./components/Detail";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const key = location.state.key;

  useEffect(() => {
    axios.get("http://localhost:3001/api/get/product").then((ele) => {
      const res = ele.data;
      if (res != null) {
        const filterData = res?.filter((ele) => ele.type === key);
        setData(filterData);
      }
    });
  }, []);

  return (
    <div className="">
      <Card data={data} />
    </div>
  );
};

export default ProductDetails;