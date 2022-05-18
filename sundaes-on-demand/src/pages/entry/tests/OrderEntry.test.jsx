import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("handles error for scoops and topping routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<OrderEntry />);

  // const alerts = await screen.findAllByRole("alert");
  // expect(alerts).toHaveLength(2);Its still works for me but somebody gets error of Having lenght of just 1 not 2. Bc whats happening here is when this is getting one Role alert it is fulfilling the condition. And it returns back not waiting for other role alerts.

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});
