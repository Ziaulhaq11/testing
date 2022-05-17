import { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

const SummaryForm = () => {
  const [confirmation, setconfirmation] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No Ice Cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={confirmation}
          onChange={(e) => setconfirmation(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!confirmation}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
