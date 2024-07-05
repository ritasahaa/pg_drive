// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components

// Generic page
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import ContactPage from "./pages/contact-us/Contact";
import ServicePage from "./pages/service/Service";

import Header from "./pages/Header";
import Footer from "./pages/Footer";

// user login
import Login from "./pages/userAdmin-LoginSignup";

// bike rental pages-----
import BikePgRent from "./pages/bike/rent";
import BikeViewDetailPage from "./pages/bike/view";
import BikeRentingPage from "./pages/bike/rental";
import BikeAdminDashboard from "./pages/bike/dashboard";

// pg rental pages-----
import PGRentingPage from "./pages/pg/rental";
import PGAdminDashboard from "./pages/pg/dashboard";

// dashboard----
// import userDashboard from "./pages/Dashboard/userDashboard"

// context
import { BikeProvider } from "./context/BikeContext";
import { PgProvider } from "./context/PgContext";

// Define the RouteConfig component
const RouteConfig = () => {
  return (
    <Router>
      <Header />
      <BikeProvider>
        <PgProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicePage />} />

            {/* login route--- */}
            <Route path="/login" element={<Login/>}/>

            {/* bike route---- */}
            <Route path="/bike-rental/home" element={<BikeRentingPage />} />
            <Route path="/rent" element={<BikePgRent />} />
            <Route
              path="/bike-rental/:bikeId/view/details"
              element={<BikeViewDetailPage />}
            />

            {/* dashboard---- */}
            {/* <Route path="/userdashboard"  element={<userDashboard />}></Route> */}
            
            {/* pg route----- */}
            <Route path="/pg-rental/home" element={<PGRentingPage />} />
            {/*  */}
          </Routes>
        </PgProvider>
      </BikeProvider>

      <Footer />
    </Router>
  );
};

export default RouteConfig;



// Import comment-----

// import BikeRentPage from "./pages/bike/home";
// import BikeAdminpageSignup from "./pages/bike/admin/signup/AdminSignup";
// import BikeAdminpageLogin from "./pages/bike/admin/login/AdminLogin";
// import PGRentPage from "./pages/pg/home";
// import PGAdminpageSignup from "./pages/pg/admin/signup/AdminSignup";
// import PGAdminpageLogin from "./pages/pg/admin/login/AdminLogin";

// Route comment-----

{/* <Route path="/bike-rental" element={<BikeRentPage />} /> */}
{/* <Route path="/bike-rental/admin/signup" element={<BikeAdminpageSignup />} />
<Route path="/bike-rental/admin/login" element={<BikeAdminpageLogin />}/> */}
{/* <Route path="/pg-rental" element={<PGRentPage />} /> */}
{/* <Route path="/pg-rental/admin/signup" element={<PGAdminpageSignup />} />
<Route path="/pg-rental/admin/login" element={<PGAdminpageLogin />} /> */}
{/* <Route path="/pg-rental/admin/dashboard" element={<PGAdminDashboard />} /> */}
{/* <Route path="/bike-rental/admin/dashboard" element={<BikeAdminDashboard />} /> */}
