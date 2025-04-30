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
      <p className="address">{restaurant.address}</p>
    </div>
  );
}
