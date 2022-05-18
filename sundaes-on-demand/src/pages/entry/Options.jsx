import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";
import ScoopOption from "./ScoopOptions";
import ToppingOption from "./ToppingOptions";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

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

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
