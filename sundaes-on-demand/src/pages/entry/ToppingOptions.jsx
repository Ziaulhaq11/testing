import { useState, useCallback } from "react";
import { Col, Form } from "react-bootstrap";

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const value = e.target.checked ? 1 : 0;
    updateItemCount(name, value);
  };
  // console.log(checked, name);
  return (
    <Col xs={12} sm={6} md={2} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} toppings`}
      />
      <Form>
        <div key={`default-${name}`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={`default-${name}`}
            label={`${name}`}
            onChange={handleChange}
          />
        </div>
      </Form>
    </Col>
  );
}
