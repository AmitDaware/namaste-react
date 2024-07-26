import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { RES_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("body rendered", listOfRestaurants);
  // --------------------------------------------------------------------

  useEffect(() => {
    fetchData();
    //-----------------------------------------------------------------
    // const timer = setInterval(() => {
    //   console.log("namaste react OP");
    // }, 1000);

    // here we have an example of clean up function how to stop the timer
    // return () => {
    //   clearInterval(timer);
    // console.log("useEffect Return");
    // };
    // --------------------------------------------------------------------
  }, []);

  // console.log("render");

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    // console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Please Check Your Internet Connection</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-500 px-10">
      <div className=" border-double  border-4 border-sky-500">
        <div className="search-bar">
          <input
            placeholder="Search"
            data-testid="searchInput"
            type="text"
            className="border border-solid border-black mx-2 my-2 rounded-lg text-center placeholder-gray-500 placeholder-opacity-100 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 mx-2 my-2  bg-blue-100 rounded-lg hover:bg-blue-500"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="px-4 mx-2 my-2  bg-blue-100 rounded-lg hover:bg-blue-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>

          <input
            placeholder="Search"
            type="text"
            className="border border-solid border-black mx-2 my-2 rounded-lg text-center placeholder-gray-500 placeholder-opacity-100 "
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className=" flex flex-wrap border-double  border-4 border-sky-500">
        {/*KEY SHOULD ALWAYS BE ON THE PARENT JSX LIKE GIVEN BELOW*/}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.id ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
