import { Col } from "react-bootstrap";

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
}
