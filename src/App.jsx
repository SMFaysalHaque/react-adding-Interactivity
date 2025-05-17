import { useState } from "react";
import Navbar from "./components/Navbar";
import OrderSection from "./components/OrderSection";
import SummaryAndReport from "./components/SummaryAndReport";
import { orders } from "./data/data";

function App() {
  const [orderLists, setOrderLists] = useState(orders);
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <OrderSection orderLists={orderLists} setOrderLists={setOrderLists} />
          <SummaryAndReport
            orderLists={orderLists}
            setOrderLists={setOrderLists}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
