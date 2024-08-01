export default function CartPage({ filterData }) {
  console.log("details", filterData);
  const details = filterData;

  return (
    <>
      <div className="md:grid-cols-4 grid grid-cols-1 justify-items-center w-full items-center py-5">
        <img src={details[0].imageUrl} />
        <div className="grid grid-cols-2 gap-3 place-items-center w-full justify-items-center px-32 ">
          <p>Name: {details[0]?.name}</p>
          <p>LOCATION: {details[0]?.location}</p>
          <p> Discount Price: {details[0]?.price}</p>
          {/* <p>Price: {price1}</p> */}
        </div>

        <button className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 rounded-sm py-1 text-sm">
          Buy Now
        </button>
      </div>
    </>
  );
}
