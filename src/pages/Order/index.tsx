import React from "react";
import ImageUpload from "./ImageUpload";
import OrderForm from "./OrderForm";
import { OrderContainer } from "./styles";

export default function Order() {
  return (
    <OrderContainer>
      <div className="content">
        <h2>Place an order!</h2>
        <OrderForm />
        {/* <ImageUpload /> */}
      </div>
    </OrderContainer>
  );
}
