import React from "react";
import productList from "./components/productList";
import MTNNormalSIM from "./components/MTN-NormalSIM";
import HeaderMTN from "./components/HeaderMTN";

const MTNNormalData = () => {
  const productsMTN = productList[0].map(product => {
    return <MTNNormalSIM key={product.productId} productItem={product} />;
  });
  return (
    <div>
      <HeaderMTN subHead="MTN Normal Data" />
      {productsMTN}
    </div>
  );
};

export default MTNNormalData;
