import { useState } from "react";
// import cake from "../../assets/baker.png";
import axios from "axios"
import { HiCake } from "react-icons/hi2";
import { BsCake } from "react-icons/bs";

import { IoCloudUploadSharp } from "react-icons/io5";
// import { createProductApi } from "../../../app/apiUrls";
function UploadProduct() {
  const [name,setName]=useState("")
  const [location,setLocation]=useState("")
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [type,setType]=useState("")
  function preFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
    console.log(image);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    uploadImage(image);

  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    preFile(file);
    console.log(file);
  };
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
   try {
  const response=  await axios.post("http://localhost:3001/api/upload/product", {
      name,
      type,
      price,
      location,
      data: base64EncodedImage,
    }, {
      headers: { "Content-Type": "application/json" }
  });
  } catch (error) {
    console.error("Error uploading image:", error);
  }
  };

  return (
    <>
      <div className="bg-stone-100 h-full md:h-screen">
        <p className="md:text-3xl   font-heading  text-bgColor flex justify-center pt-5 ">
          <IoCloudUploadSharp size="40px" className="mr-3" /> Welcome here for
          Upload Cake
        </p>
        <div className="md:flex bg-opacity-60 justify-evenly  md:px-5 px-12">
          <div className=" w-2/3 rounded-md  ">
            <p className="pt-4  font-heading text-textColor text-2xl flex justify-center items-center py-3">
              <BsCake className="text-headingColor mr-3" fontSize="40px" />{" "}
              Upload Your Cake Details Here
            </p>

            <form
              onSubmit={(e) => handleSubmit(e)}
              className="grid grid-cols-1 gap-6  md:grid-cols-2"
            >
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  Name
                </label>
                <br />
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>
                <div>
                <label className="text-textColor  pl-1 font-text ">
                  Type : PG/BIKE
                </label>
                <br />
                <input
                  onChange={(e) => setType(e.target.value)}
                  name="type"
                  type="text"
                  placeholder="Pg.. OR Bike.."
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  Price
                </label>
                <br />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  name="price"
                  type="number"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>
              <div>
                <label className="text-textColor  pl-1 font-text ">
                  location
                </label>
                <br />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  name="location"
                  type="text"
                  required
                  className="ring-1 mt-1 ring-inset ring-neutral-300 border py-2 outline-none rounded-md pl-2 "
                />
              </div>

              <div>
                <label>Image</label>
                <input
                  type="file"
                  accept="image/png,image/jpg,image/jpeg"
                  onChange={handleChange}
                  className=" mt-1  ring-neutral-300  py-2 pl-2 "
                ></input>
              </div>
              
              <div className="flex  justify-center  py-2">
                <button
                  type="submit"
                  className="text-white  font-text rounded-md bg-indigo-500 px-7 py-2 my-5 "
                >
                  submit
                </button>
              </div>
            </form>
          </div>
          <div className=" my-4 py-5 ">
            <img
              src={image}
              className="md:h-96  md:w-96  h-32 w-32  rounded-md "
              alt=" Uploded Image Shown Here"
            ></img> 
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadProduct;
