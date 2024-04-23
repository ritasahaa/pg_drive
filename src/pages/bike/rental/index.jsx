import CardList from "../../../components/CardList";
import "./index.css";

const BikeRentPage = () => {
  const bikeData = [
    {
      id: 1,
      title: "Yamaha FZ250",
      description: "Company:KTM",
      imageUrl: "bike7.jpeg",
      price1: 799,
      price2: 999,
    },
    {
      id: 2,
      title: "Bajaj Pulsar 150",
      description: "Company:Suzuki",
      imageUrl: "/bike2.jpeg",
      price1: 599,
      price2: 699,
    },
    {
      id: 3,
      title: "Bounce Infinity",
      description: "Company:Suzuki",
      imageUrl: "/scooty4.jpeg",
      price1: 499,
    },
    {
      id: 4,
      title: "Bajaj Platina 100",
      description: "Company:Triumph",
      imageUrl: "/bike3.jpeg",
      price1: 499,
      price2: 549,
    },
    {
      id: 5,
      title: "Honda DIO",
      description: "Company:Suzuki",
      imageUrl: "/scooty5.jpeg",
      price1: 499,
      price2: 549,
    },
    {
      id: 6,
      title: "Yamaha R15 V3",
      description: "Company:Suzuki",
      imageUrl: "/bike4.jpeg",
      price1: 599,
      price2: 699,
    },
    {
      id: 7,
      title: "Suzuki Gixxer SF",
      description: "Company:Suzuki",
      imageUrl: "/bike5.jpeg",
      price1: 599,
      price2: 699,
    },
    {
      id: 8,
      title: "BGauss D15",
      description: "Company:Suzuki",
      imageUrl: "/scooty6.jpeg",
      price1: 499,
    },
    // Other bike-related data
  ];

  return (
    <div>
      <div className="bike-item-list"></div>
      <h2 id="bike-heading">Bike Rental System</h2>
      <CardList data={bikeData}  type="bike"/>
      {/* Other bike-related components */}
    </div>
  );
};

export default BikeRentPage;
