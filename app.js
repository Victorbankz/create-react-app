import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";
import { Card } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
            <Image />
          </Card.Text>
        </Card.Body>
      </Card>
      <p>
        Hello, {process.env.REACT_APP_FIRST_NAME ? process.env.REACT_APP_FIRST_NAME : "there"}!
      </p>
      {process.env.REACT_APP_FIRST_NAME && <img src={product.image} alt="Product" />}
    </div>
  );
};

export default App;