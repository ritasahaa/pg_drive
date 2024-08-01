  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Detail from "./Detail";

  const Cards = ({ data }) => {
    const [name, setName] = useState(null);
    const [names, setNames] = useState("");
    console.log("names",names)
    const [id, setId] = useState(null);
    const navigate = useNavigate();
    const filterData = data?.filter((ele) => ele._id == id);
    // const price2=price.Math.random()


    useEffect(() => {
      const storedName = localStorage.getItem("name");
      setName(storedName);
    }, []);

    const handleSubmit = () => {
      localStorage.setItem("rent", "rent");
      navigate(name ? "/rent" : "/login");
    };

    return (
      <>
        {id == null ? (
          <div>
            <h1 className="text-red-400 flex justify-center py-5 text-2xl font-semibold font-serif">
              Product
            </h1>
            {data && data.length > 0 ? (
              <div className="md:grid-cols-4 grid grid-cols-1 gap-4 w-full md:px-4 py-5">
                {data.map((ele, index) => {
                      // const secondPrice = ele.price * (1.8 + Math.random() * 0.4);
                      // const secondPrice = Math.floor(ele.price + Math.random());
                      const secondPrice = Math.round(ele.price * (1.8 + Math.random() * 0.4));
                      
                  return <>
                  <div
                    key={index}
                    className="p-4 rounded-md bg-white shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                  >
                    <img
                      src={ele.imageUrl}
                      alt={ele.name}
                      className="h-52 w-full"
                    />
                    <div className=" space-y-2">
                      <h2>Name Of Product {ele.name}</h2>
                      <div>
                        <p id="price-tag">
                          &#x20B9; {ele.price} - &#x20B9; {secondPrice} / day
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="bg-yellow-500 hover:bg-yellow-600 px-4 rounded-sm py-1 text-white"
                          onClick={() => setId(ele._id)}
                          aria-label={`View details for ${ele.name}`}
                        >
                          <span>&#x1F441;</span> View
                        </button>
                        <button
                          className="bg-indigo-500 hover:bg-indigo-600 px-4 rounded-sm py-1 text-white"
                          onClick={() => handleSubmit(ele._id)}
                          aria-label={`Rent ${ele.name}`}
                        >
                          Rent
                        </button>
                      </div>
                    </div>
                  </div>
                  </>
                })}
              </div>
            ) : (
              <p>No products available.</p>
            )}
          </div>
        ) : (
          <div>
            <Detail filterData={filterData} setId={setId} name={name} />
          </div>
        )}
      </>
    );
  };

  export default Cards;
