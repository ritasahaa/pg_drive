import CardList from "../../../components/CardList";
import "./index.css";

const PGRentPage = () => {
  const pgData = [
    {
      id: 1,
      title: "Modern PG",
      description: "Kabir Nagar Chauraha",
      imageUrl: "../image/pg1.jpg",
      rent: "Rent",
      view: "View",
      
    },
    {
      id: 2,
      title: "Krishna PG",
      description: "In Durgakund",
      imageUrl: "../image/pg9.jpeg",
      rent: "Rent",
      view: "View",
    },
    {
      id: 3,
      title: "Sweet Home PG",
      description: "Meerapur Basahi",
      imageUrl: "../image/pg3.jpg",
      rent: "Rent",
      view: "View",
    },
    {
      id: 4,
      title: "Agarwal PG",
      description: "Varanasi Cantt",
      imageUrl: "../image/pg4.jpg",
      rent: "Rent",
      view: "View",
    },
    {
      id: 5,
      title: "Aadhya Girls PG",
      description: "In Paharia",
      imageUrl: "../image/pg5.jpeg",
      rent: "Rent",
      view: "View",
    },
    {
      id: 6,
      title: "Vatsalya Girls PG",
      description: "In Kabir Nagar",
      imageUrl: "../image/pg6.jpeg",
      rent: "Rent",
      view: "View",
    },
    {
      id: 7,
      title: "Govardhan PG",
      description: "Nagawa Lanka",
      imageUrl: "../image/pg7.jpeg",
      rent: "Rent",
      view: "View",
    },
    {
      id: 8,
      title: "Jaiswal PG",
      description: "Ramapura Luxa",
      imageUrl: "../image/pg8.jpeg",
      rent: "Rent",
      view: "View",
    },
    // Other PG-related data
  ];

  return (
    <div>
      <div className="pg-item-list">
        {/* <q className="pg-home-text">Find a home far from Home</q>  */}
      </div>
      <h2 id="pg-heading">PG Rental System</h2>
      <CardList data={pgData} type="pg"/>
      {/* Other PG-related components */}
    </div>
  );
};

export default PGRentPage;
