import React from "react";

const HeaderMTN = props => {
  return (
    <div className="HeaderStyle" style={{ backgroundColor: "yellow" }}>
      <h1>MTN Zambia Ltd</h1>
      <h3>{props.subHead}</h3>
    </div>
  );
};

export default HeaderMTN;
