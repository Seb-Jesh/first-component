import React from "react";

import AirtelLogo from "./images/Airtel.jpg";

const ProductAirtel = props => {
  return (
    <div>
      <img src={AirtelLogo} alt="Airtel Logo"></img>
      <div style={{ marginLeft: "15px" }}>
        <p>
          <span>Data bundle:</span> {props.productItem.bundle}
        </p>
        <p>
          <span>Validity:</span> {props.productItem.validity}
        </p>
        <p>
          <span>Price:</span> {props.productItem.price}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default ProductAirtel;
