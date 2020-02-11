import React from "react";
import productList from "./components/productList";
import MTNMifi from "./components/MTN-Mifi";
import HeaderMTN from "./components/HeaderMTN";

const MTN = () => {
  const productsMTN = productList[1].map(product => {
    return <MTNMifi key={product.productId} productItem={product} />;
  });
  return (
    <div>
      <HeaderMTN subHead="MTN Mifi Data" />
      {productsMTN}
    </div>
  );
};

export default MTN;
