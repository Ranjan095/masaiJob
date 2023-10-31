/** @format */

import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  let handleReset=()=>{
    handleBill(0);
    handleTip(0);
    handlePeople(1);
  }
  return (
    <div>
      {/* Add tip Amount and total here */}
      <div style={{ display: "flex" }}>
        <div>
          <p>Tip Amount</p>
          <p>/Person</p>
        </div>
        <h1 className="tipAmount">{tipAmount}</h1>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <p>Total</p>
          <p>/Person</p>
        </div>
        <h1 className="TotalAmount">{total}</h1>
      </div>

      {/* Add button to RESET */}
      <button onClick={handleReset} className="Reset">RESET</button>
    </div>
  );
};

export default RightBox;
