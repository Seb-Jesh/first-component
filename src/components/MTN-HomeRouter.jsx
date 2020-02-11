import React from "react";

import MTNLogo from "./images/MTN.png";

const MTNHomeRouter = props => {
  return (
    <div>
      <div style={{ marginLeft: "15px" }}>
        <img src={MTNLogo} alt="MTN Logo"></img>
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

export default MTNHomeRouter;
