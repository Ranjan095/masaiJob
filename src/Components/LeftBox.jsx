/** @format */

const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div>
      {/* Add input for bill */}
      <p>Bill</p>
      <input
        type="number"
        value={bill}
        onChange={(e) => handleBill(e.target.value)}
        className="bill_input"
      ></input>
      {/* Add buttons for % of tip */}
      <p>Select Tip %</p>
      <button onClick={() => handleTip(5)}>5%</button>
      <button onClick={() => handleTip(10)}>10%</button>
      <button onClick={() => handleTip(15)}>15%</button>
      <button onClick={() => handleTip(25)}>25%</button>
      <button onClick={() => handleTip(50)}>50%</button>
      <br />
      <input placeholder="Custom" className="custom" />
      {/* Add input for no.of peoples */}
      <p>Number of people</p>
      <input
        type="number"
        onChange={(e) => handlePeople(e.target.value)}
        value={people}
        className="people"
      />
    </div>
  );
};

export default LeftBox;
