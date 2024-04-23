import { Link } from "react-router-dom";
import "./index.css"


const PGHomePage = () => {
  return (
    <>
      <div className="pg-page">
        <ul className="pg-rentals">
          <li>
            <Link to="/pg-rental/home">PG Homepage</Link>
          </li>
          <li>
            <Link to="/pg-rental/admin/signup">PG Rental Admin</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default PGHomePage