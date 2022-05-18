import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { pricePerItem } from "../../constants";
import AlertBanner from "../common/AlertBanner";
import ScoopOption from "./ScoopOptions";
import ToppingOption from "./ToppingOptions";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const [OrderDetails, updateItemCount] = useOrderDetails();
  console.log(OrderDetails);

  //optionType is "scoops" or "toppings"
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  //TODO:Replace null with ToppingOption
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const title = optionType[0].toUpperCase() + optionType.slice(1);

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>${pricePerItem[optionType]}each</p>
      <p>
        {title} total : {OrderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
