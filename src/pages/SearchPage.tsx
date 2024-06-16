import { useSearchRestaurant } from "@/api/RestaurantSearchApi";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results } = useSearchRestaurant();

  return (
    <span>
      User searched for {city}
      <span>
        {results?.data.map((restaurant) => (
          <span>
            found - {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </span>
  );
}
