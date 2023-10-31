/** @format */

import { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  let [tip, setTip] = useState(0);
  let [bill, setBill] = useState(0);
  let [people, setPeople] = useState(1);

  let handleTip = (val) => {
    setTip(val);
  };
  let handleBill = (val) => {
    setBill(val);
  };

  let handlePeople = (val) => {
    setPeople(val);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="billbox"
    >
      {/* Add LeftBox and RightBox component here */}
      <LeftBox
        handleTip={handleTip}
        handleBill={handleBill}
        bill={bill}
        people={people}
        handlePeople={handlePeople}
      />
      <RightBox
        handleTip={handleTip}
        handleBill={handleBill}
        handlePeople={handlePeople}
        tipAmount={tip}
        total={""}
      />
    </div>
  );
};

export default BillPage;
