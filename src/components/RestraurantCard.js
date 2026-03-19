import { PLACEHOLDER_LOGO_URL } from "../utils/constants";

const RestraurantCard = (props) => {
  const { resName, items, rating, deliveryTime } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={PLACEHOLDER_LOGO_URL}
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{items}</h4>
      <h4>{rating} Stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestraurantCard;