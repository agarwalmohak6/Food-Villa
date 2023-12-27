import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Not using key (not acceptable) <<< index as key <<<<<<<<<<<<<<< unique id as key (best practice)
const Body = () => {
  // Local state variable - useState
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    async function checkJsonData(json) {
      for (let i = 0; i < json?.data?.cards.length; i++) {
        // Optional Chaining
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkJsonData(json);
    setListOfRestaurant(resData);
  }
  // Conditional Rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          ></input>
          <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
