import { useState } from "react";
import Reports from "./layout/Reports";
import Summary from "./layout/Summary";
import Filter from "./svg/Filter";

export default function SummaryAndReport({ orderLists, setOrderLists }) {
  const [filterValue, setFilterValue] = useState("All");
  function handleFilterClick(event) {
    setFilterValue(event.target.value);
  }

  return (
    <>
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Summary state={"Total Order"} orderLists={orderLists} />

            <Summary state={"Pending"} orderLists={orderLists} />

            <Summary state={"Delivered"} orderLists={orderLists} />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Order Reports</h2>

            <div className="flex gap-4 items-center">
              <Filter />
              <select
                onClick={(e) => {
                  e.stopPropagation();
                  handleFilterClick(e);
                }}
                className="w-[100px] bg-zinc-900 accent-orange-600 border-none outline-none p-1 rounded"
              >
                <option>All</option>
                <option>Pending</option>
                <option>Delivered</option>
              </select>
            </div>
          </div>
          <div className="bg-cardbg rounded-lg p-4">
            <div className="reports-container">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-sm">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Customer Name</th>
                    <th className="pb-3 font-medium">Items</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <Reports
                    orderLists={orderLists}
                    setOrderLists={setOrderLists}
                    filterName={filterValue}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
