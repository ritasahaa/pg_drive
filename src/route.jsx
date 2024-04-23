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

// bike rental pages
import BikeRentPage from "./pages/bike/home";

import BikeRent from "./pages/bike/rent";

import BikeViewDetailPage from "./pages/bike/view";
import BikeRentingPage from "./pages/bike/rental";
import BikeAdminpageSignup from "./pages/bike/admin/signup/AdminSignup";
import BikeAdminpageLogin from "./pages/bike/admin/login/AdminLogin";
import BikeAdminDashboard from "./pages/bike/dashboard";

// pg rental pages
import PGRentPage from "./pages/pg/home";
import PGRentingPage from "./pages/pg/rental";
import PGAdminpageSignup from "./pages/pg/admin/signup/AdminSignup";
import PGAdminpageLogin from "./pages/pg/admin/login/AdminLogin";
import PGAdminDashboard from "./pages/pg/dashboard";

// context
import { BikeProvider } from "./context";
// Define the RouteConfig component
const RouteConfig = () => {
  return (
    <Router>
      <Header />
      <BikeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />

          {/* <Route path="/bike-rental" element={<BikeRentPage />} /> */}
          <Route path="/bike-rental/home" element={<BikeRentingPage />} />
          <Route path="/bike-rental/rent" element={<BikeRent />} />
          <Route
            path="/bike-rental/:bikeId/view/details"
            element={<BikeViewDetailPage />}
          />
          <Route
            path="/bike-rental/admin/dashboard"
            element={<BikeAdminDashboard />}
          />

          <Route
            path="/bike-rental/admin/signup"
            element={<BikeAdminpageSignup />}
          />
          <Route
            path="/bike-rental/admin/login"
            element={<BikeAdminpageLogin />}
          />

        {/* <Route path="/pg-rental" element={<PGRentPage />} /> */}
        <Route path="/pg-rental/home" element={<PGRentingPage />} />
        <Route path="/pg-rental/admin/signup" element={<PGAdminpageSignup />} />
        <Route path="/pg-rental/admin/login" element={<PGAdminpageLogin />} />
        <Route
          path="/pg-rental/admin/dashboard"
          element={<PGAdminDashboard />}
        />
      </Routes>
      </BikeProvider>

      <Footer />
    </Router>
  );
};

export default RouteConfig;

// signup form page (/pg-rental/admin)

// Name
// Age
// Sex
// email
// password
// confirmpassword

// Link : Login (clicking will take you to login page)

// submit button

// Login form: login page (/pg-rental/admin/login)

// email
// password

// Link : Signup (clicking will take you to Signup page)

// submit button
