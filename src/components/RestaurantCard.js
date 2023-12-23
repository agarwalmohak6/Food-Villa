import { CDN_URL } from "../utils/constants";
// When we dynamically need to pass in some data to a component, we do it using props.
// Passing props to a component, simply means passing arguments to a function.
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="reslogo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.slaString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
