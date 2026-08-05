import { Row, Col } from "react-bootstrap";

function Callout({heading, text, color=""}) {
  return (
    <div className={`callout callout-${color}`}>
      <p className="m-0 h5">
        <strong>{heading}</strong>
        {text}
      </p>
    </div>
  );
}

export default Callout;
