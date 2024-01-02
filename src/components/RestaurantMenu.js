import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL, IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]); // Include resId as a dependency

  const fetchMenu = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);
    // console.log(data);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>RestaurantId: {resInfo?.data?.cards[0]?.card?.card?.info?.id}</h2>
        <h2>{resInfo?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            resInfo?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={resInfo?.data?.cards[0]?.card?.card?.info?.name}
        />
        <h3>
          {resInfo?.data?.cards[0]?.card?.card?.info?.areaName},{" "}
          {resInfo?.data?.cards[0]?.card?.card?.info?.city}
        </h3>
        <h3>{resInfo?.data?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>
          Rs. {resInfo?.data?.cards[0]?.card?.card?.info?.costForTwo / 100} for two
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
