import RestaurantCard from "./RestaurantCard.jsx";
import './body.css';
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.jsx";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  function handleChange(event) {
    setsearchText(event.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING;"
    );

    const json = await data.json();

    console.log(json);
    //optional chaining
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h2>Looks like you are offline</h2>

  if (onlineStatus=== false) { <h2>Looks like You are Offline</h2>}

  return listofRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search-Box"
            className="search-box"
            value={searchText}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurants(filterList);
          }}
        >
          Top Rated Restaruants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id} className="link">
            <RestaurantCard resData={restaurant} />
          </Link>
          // <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
