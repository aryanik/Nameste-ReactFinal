import { CDN_URL } from "../utils/constant";
import { CDN_URL } from "../utils/constant";
const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info || {};

  const {deliveryTime} = resData.info.sla || {};


  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-log"
        src={
           CDN_URL+
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
