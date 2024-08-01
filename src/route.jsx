import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

// pg rental pages-----
import PGRentingPage from "./pages/pg/rental";

// dashboard----
import UserDashboard from "./pages/dashboard/userDashboard";
// import AdminDashboard from "./pages/dashboard/adminDashboard";

// context
import { BikeProvider } from "./context/BikeContext";
import { PgProvider } from "./context/PgContext";
import ProductDetails from "./pages/product";
import Detail from "./pages/product/components/Detail";
import CartPage from "./pages/cart";

// Wrapper component for handling Header and Footer
const RoutesWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<ProductDetails />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bike-rental/home" element={<ProductDetails />} />
        <Route path="/rent" element={<BikePgRent />} />
        <Route
          path="/bike-rental/:bikeId/view/details"
          element={<BikeViewDetailPage />}
        />
        <Route path="/detail/:_id" element={<Detail />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/pg-rental/home" element={<ProductDetails />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

// Define the RouteConfig component
const RouteConfig = () => {
  return (
    <Router>
      <BikeProvider>
        <PgProvider>
          <RoutesWrapper />
        </PgProvider>
      </BikeProvider>
    </Router>
  );
};

export default RouteConfig;
