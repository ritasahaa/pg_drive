import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleRenderButton = () => {
    let bike = "Bike";
    navigate("/bike-rental/home", { state: { key: bike } });
  };
  const handlePgButton = () => {
    let pg = "PG";
    navigate("/pg-rental/home", { state: { key: pg } });
  };
  return (
    <>
      <div className="home-container">
        <marquee>
          <span className="txt">
            "Rev Up Life, Settle In Style: Your Ride, Your Stay – Welcome Home!"
          </span>
        </marquee>
        {/* main content */}
        <main className="main">
          <ul className="site-navigation">
            <li>
              <button
                onClick={handlePgButton}
                className="px-10 bg-indigo-500 text-white py-2 rounded-sm hover:bg-indigo-600"
              >
                PG&nbsp;Rental
              </button>
            </li>
            <li>
              <button
                onClick={handleRenderButton}
                className="px-10 bg-indigo-500 text-white py-2 rounded-sm hover:bg-indigo-600"
              >
                Bike&nbsp;Rental
              </button>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default HomePage;