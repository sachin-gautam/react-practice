import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";
import {RESTAURANT_LIST_URL} from "../utils/constants.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( RESTAURANT_LIST_URL );
    const json = await data.json();
    setListOfRestaurants(json);
  };

  if (listOfRestaurants.length === 0) {
    return (
      <div className="res-container">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
    );
  }

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.Distance <= 2,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter - Nearest
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestraurantCard key={restaurant.Id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
