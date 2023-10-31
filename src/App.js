/** @format */

import "./App.css";
import BillPage from "./Components/BillPage";
const App = () => {
  return (
    <div className="container">
      {/* Add title here in h1 tag */}
      <h1 style={{textAlign:"center"}}>SPLITTER </h1>
      <div>
        {/* Add BillPage component */}
        <BillPage />
      </div>
    </div>
  );
};

export default App;
