import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// Not using key (not acceptable) <<< index as key <<<<<<<<<<<<<<< unique id as key (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{alert("Clicked")}}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
