const RestraurantCard = (props) => {
  const { restaurant } = props;
  const { VendorListingWebImageName, Name, Cuisine, Address1, Distance } = restaurant;
  return (
    <div className="res-card">
      <img className="res-logo" src={VendorListingWebImageName} alt="res-logo" />
      <h3>{Name}</h3>
      <h4>{Cuisine}</h4>
      <h4>{Address1}</h4>
      <h4>{Distance}km away</h4>
    </div>
  );
};

export default RestraurantCard;
