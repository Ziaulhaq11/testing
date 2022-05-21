import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";

export default function OrderEntry() {
  const [OrderDetails] = useOrderDetails();

  return (
    <>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total is :- {OrderDetails.totals.grandTotal}</h2>
    </>
  );
}
