import { Link } from "react-router-dom";
import "./index.css"

const BikeRentalPage = () => {
  return (
    <div className="bikes-page">
      <ul className="bike-rentals">
        <li>
          <Link to="/bike-rental/home">Bike Homepage</Link>
        </li>
        <li>
          <Link to="/bike-rental/admin/signup">Bike Rental Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default BikeRentalPage;
