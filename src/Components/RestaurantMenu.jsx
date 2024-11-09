import ShimmerCard from "./Shimmer";
import "./restaurantMenu.css";
import { MENU_IMG_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";

const RestaurantMenu = () => {
  const [cartItem, setCartItem] = useState([])
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const cartRef = useRef();

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const imageId = itemCards;

  const handleAddToCartItem = (item) => {
    // if(cartRef.current) {
    //   cartRef.current.addItemToCart({
    //     id: item.card.info.id,
    //     name: item.card.info.name,
    //     price:
    //       (item.card.info.defaultPrice ||
    //         item.card.info.finalPrice ||
    //         item.card.info.price) / 100,
    //     imageUrl: MENU_IMG_URL + item.card.info.imageId,
    //     description: item.card.info.description,
    //   });
    // }


    setCartItem((prevCart) => [...prevCart, item]);
   
    
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem])

  // console.log(itemCards);

  return resInfo === null ? (
    <ShimmerCard />
  ) : (
    <div className="menu">
      {/* <img src={MENU_IMG_URL + imageId}/> */}
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul className="menu-list">
        {itemCards.map((item, id) => {
          return (
            <div className="menu-item-container">
              <div className="menu-food-price">
                <li key={item.card.info.id} className="menu-item">
                  {item.card.info.name}
                </li>
                <li className="menu-item-price">
                  ₹
                  {(item.card.info.defaultPrice ||
                    item.card.info.finalPrice ||
                    item.card.info.price) / 100}
                </li>
                <li className="menu-item-description">
                  {item.card.info.description}
                </li>
              </div>
              <div>
                <li>
                  <img
                    className="menu-img"
                    alt="menu items"
                    src={MENU_IMG_URL + item.card.info.imageId}
                  />
                </li>
              </div>
              <div className="addButton">
                <button onClick={() => handleAddToCartItem(item)}>
                  {" "}
                  + Add
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
