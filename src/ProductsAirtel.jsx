import React from "react";
import productList from "./components/productList";
import ProductAirtel from "./components/ProductAirtel";
import HeaderAirtel from "./components/HeaderAirtel";

const Airtel = () => {
  const productsAirtel = productList[3].map(product => {
    return <ProductAirtel key={product.productId} productItem={product} />;
  });
  return (
    <div>
      <HeaderAirtel />
      {productsAirtel}
    </div>
  );
};

export default Airtel;
