import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOptions";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  //optionType is "scoops" or "toppings"
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [optionType]);

  //TODO:Replace null with ToppingOption
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
