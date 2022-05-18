import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

//create custom hook to check whether we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }
  return context;
}

export function OrderDetailsProvider(props) {
  const [optionCount, setOptionCount] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  const calculateSubtotal = (optionType, optionCounts) => {
    let optionCount = 0;
    for (const count of optionCounts[optionType].values()) {
      optionCount += count;
    }
    return optionCount * pricePerItem[optionType];
  };

  useEffect(() => {
    const scoopsSubTotal = calculateSubtotal("scoops", optionCount);
    const toppingsSubTotal = calculateSubtotal("toppings", optionCount);
    const grandTotal = scoopsSubTotal + toppingsSubTotal;
    setTotals({
      scoops: formatCurrency(scoopsSubTotal),
      toppings: formatCurrency(toppingsSubTotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCount]);
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCount };

      //Update
      const optionCountMap = newOptionCounts[optionType];
      optionCountMap.set(itemName, parseInt(newItemCount));

      setOptionCount(newOptionCounts);
    }

    //getter : object containing option counts for scoops and toppings, subtotals and totals
    //setter : updateOptionCount
    return [{ ...optionCount, totals }, updateItemCount];
  }, [optionCount, totals]);
  return <OrderDetails.Provider value={value} {...props} />;
}
