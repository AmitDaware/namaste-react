import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { loggedInUser } = useContext(UserContext);
  const {
    name,
    cuisines,
    avgRating,
    locality,
    areaName,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className=" m-4 p-4 w-[250px] h-[550px]  border-double  border-4 border-red-200 bg-gray-300 rounded-xl hover:bg-violet-300 "
    >
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-serif font-extrabold text-lg mb-2 text-black">
        {name}
      </h3>
      <h4 className="italic text-gray-700 text-base">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-700 text-base">{avgRating}</h4>
      <h4 className="text-gray-700 text-base">{locality}</h4>
      <h4 className="text-gray-700 text-base">{areaName}</h4>
      <h4 className="text-gray-700 text-base">{costForTwo}</h4>
      <h4 className="text-gray-700 text-base">User:{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg font-thin">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
