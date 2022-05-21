import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

//Re-Export everything
export * from "@testing-library/react";

//OverRide render method
export { renderWithContext as render };
