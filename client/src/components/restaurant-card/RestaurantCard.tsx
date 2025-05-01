import { Restaurant } from "../../types";
import "./styles.css";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="card">
      <h3>{restaurant.name}</h3>
      <p>Rating: {restaurant.rating}</p>
      <p>{restaurant.openNow ? "Currently Open" : "Not open yet"}</p>
      <p className="address">{restaurant.address}</p>
      <p>
        <a href={restaurant.url}>Link</a>
      </p>
    </div>
  );
}
