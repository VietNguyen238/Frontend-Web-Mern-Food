import { Order } from "@/types";
import { Progress } from "./ui/progress";

interface Props {
  order: Order;
}
export default function OrderStatusHeader({ order }: Props) {
  const getExpectedStatus = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };
  return (
    <>
      <h1 className='text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between'>
        <span>Order Status: {order.status}</span>
        <span>Expected by: {getExpectedStatus()}</span>
      </h1>
      <Progress className='animate-pulse' value={50} />
    </>
  );
}
