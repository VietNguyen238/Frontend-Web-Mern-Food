import { CartItem } from "@/pages/DetailPage";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Restaurant } from "@/types";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

interface Props {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
}

export default function OrderSummary({
  restaurant,
  cartItems,
  removeFromCart,
}: Props) {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold tracking-tight flex justify-between'>
          <span>Your Order</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-5'>
        {cartItems.map((item, index) => (
          <div key={index} className='flex justify-between'>
            <span>
              <Badge variant='outline' className='mr-2'>
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className='flex items-center gap-1'>
              ${((item.price * item.quantity) / 100).toFixed(2)}
              <Trash
                className='cursor-pointer ml-1'
                color='red'
                size={15}
                onClick={() => removeFromCart(item)}
              />
            </span>
          </div>
        ))}
        <Separator />
        <div className='flex justify-between'>
          <span>Delivery</span>
          <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </Card>
  );
}
