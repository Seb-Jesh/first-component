import React from "react";
import productList from "./components/productList";
import MTNHomeRouter from "./components/MTN-HomeRouter";
import HeaderMTN from "./components/HeaderMTN";

const MTNRouter = () => {
  const productsMTN = productList[2].map(product => {
    return <MTNHomeRouter key={product.productId} productItem={product} />;
  });
  return (
    <div>
      <HeaderMTN subHead="MTN Home Router Data" />
      {productsMTN}
    </div>
  );
};

export default MTNRouter;
