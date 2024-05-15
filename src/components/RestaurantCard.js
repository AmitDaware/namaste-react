import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, locality, areaName, costForTwo, cloudinaryImageId} =
    resData?.info;
  // console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
