import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
          Rs. {resInfo?.data?.cards[0]?.card?.card?.info?.costForTwo / 100} for
          two
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
