// import { useSelector } from "react-redux";
import { GoGift } from "react-icons/go";
import { TbAlarmSnooze } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdInventory, MdLock } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useState ,useEffect} from "react";
import Team from "../component/team";

import MyOrder from "../component/order";
import MyProfile from "../component/myProfile";
import MyRemainder from "../component/myRemainder";
import GiftVoucher from "../component/gifts";
import SaveAddress from "../component/saveAddress";
import ChangePassword from "../component/changePassword";
import UploadProduct from "../component/upload/upload"


const Page2 = () => (
  <div>
    <MyProfile />
  </div>
);

const Page1 = () => (
  <div>
    <MyOrder />
  </div>
);

const Page3 = () => (
  <div>
    <MyRemainder />
  </div>
);
const Page4 = () => (
  <div>
    <GiftVoucher />
  </div>
);
const Page5 = () => (
  <div>
    <SaveAddress />
  </div>
);
const Page6 = () => (
  <div>
    <ChangePassword />
  </div>
);
const Page7 = () => (
  <div>
    <UploadProduct />
  </div>
);

export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState("My Profile");
  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  // const userData = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const password = () => {
    // navigate("/");
  };


  useEffect(() => {
    const name = localStorage.getItem("name");
    const category = localStorage.getItem("category");
    setName(name);
    setCategory(category);
  }, [])

  return (
    <div className="font-text h-screen bg-stone-50 text-lg flex text-textColor justify-around px-10">
      <div className=" bg-white w-1/4  pt-5 divide-y ">

        <div
          className="flex  items-center space-x-6 pl-16 linkCss"
          onClick={() => setCurrentPage("My Profile")}
        >
          <FaUser fontSize="20px" />
          <p>{name ? name : "My Profile"}</p>
        </div>
        {category == "Admin" ? <div></div> : 
        <div className="flex flex-col divide-y">
     <div
          className="flex pl-16 items-center space-x-6 linkCss "
          onClick={() => setCurrentPage("My-Order")}
        >
          <MdInventory fontSize="20px" />
          <p>My Orders</p>
        </div>

        <div
          className="flex  items-center space-x-5 pl-16 linkCss"
          onClick={() => setCurrentPage("My Remainers")}
        >
          <TbAlarmSnooze fontSize="26px" />
          <p>My Remainers</p>
        </div>

        <div
          className="flex  items-center space-x-6 pl-16 linkCss  "
          onClick={() => setCurrentPage("Gift Vouchers")}
        >
          <MdLocalOffer fontSize="20px" />
          <p>Gift Vouchers</p>
        </div>

        <div
          className="flex  items-center space-x-6 pl-16 linkCss  "
          onClick={() => setCurrentPage("Save Addresses")}
        >
          <FaRegAddressCard fontSize="20px" />
          <p>Save Addresses</p>
        </div>

</div>}

     
     {
      category==="Admin" && <div
      className="flex  items-center space-x-6 pl-16 linkCss  "
      onClick={() => setCurrentPage("Upload Product")}
    >
      <MdLocalOffer fontSize="20px" />
      <p>Upload Product</p>
    </div>
     }
        <div
          className="flex  items-center space-x-6 pl-16 linkCss  "
          onClick={() => setCurrentPage("Change Password")}
        >
          <MdLock fontSize="20px" />
          <button onClick={password}>Change Password</button>
        </div>
      </div>
      <div className="w-3/4 bg-white ml-10">
        <div className="p-5">
          {currentPage === "My-Order" && <Page1 />}
          {currentPage === "My Profile" && <Page2 />}
          {currentPage === "My Remainers" && <Page3 />}
          {currentPage === "Gift Vouchers" && <Page4 />}
          {currentPage === "Save Addresses" && <Page5 />}
          {currentPage === "Change Password" && <Page6 />}
          {currentPage === "Upload Product" && <Page7 />}

        </div>
      </div>
    </div>
  );
}



