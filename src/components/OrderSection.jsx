import { useState } from "react";
import { items } from "../data/data";
import Items from "./layout/Items";

export default function OrderSection({ orderLists, setOrderLists }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const totalAmount = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    if (selectedItems.length === 0) return alert("Choose Item is required.");

    if (!inputValue.trim()) return alert("Customer name is required.");
    const lastId =
      orderLists.length > 0 ? orderLists[orderLists.length - 1].orderId : 0;

    const newOrder = {
      orderId: lastId + 1,
      name: inputValue,
      itemCount: selectedItems.length,
      totalAmount,
      orderStatus: "PENDING",
    };

    setOrderLists([...orderLists, newOrder]);
    setInputValue("");
    setSelectedItems([]);
  };

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full bg-gray-700/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          <Items
            items={items}
            onSelectionChange={setSelectedItems}
            selectedAvailableItems={selectedItems}
          />
        </div>
      </div>

      <button
        onClick={placeOrder}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {totalAmount})
      </button>
    </div>
  );
}
