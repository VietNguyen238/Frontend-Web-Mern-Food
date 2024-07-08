import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantInfo({ restaurant }: Props) {
  return (
    <Card className='border-slate-500'>
      <CardHeader>
        <CardTitle className='font-bold'>{restaurant.restaurantName}</CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex'>
        {restaurant.cuisines.map((item, index) => (
          <span key={index} className='flex'>
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
