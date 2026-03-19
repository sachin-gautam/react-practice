import RestraurantCard from "./RestraurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => console.log("Filter by Top Rated")}
        >
          Filter - Top Rated
        </button>
      </div>
      <div className="res-container">
        <RestraurantCard
          resName="Pizza Hut"
          items="Pizza, Pasta, Salad"
          rating="4.5"
          deliveryTime="30 minutes"
        />
        <RestraurantCard
          resName="Burger King"
          items="Burger, Fries, Coke"
          rating="4.2"
          deliveryTime="25 minutes"
        />
      </div>
    </div>
  );
};

export default Body;
