export default function Summary({ state, orderLists }) {
  const totalCount = orderLists.length;
  const pendingCount = orderLists.filter(
    (order) => order.orderStatus === "PENDING"
  ).length;

  const deliveryCount = orderLists.filter(
    (order) => order.orderStatus === "DELIVERED"
  ).length;

  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div
        className={`text-5xl font-bold ${
          state === "Total Order"
            ? "text-yellow-500"
            : state === "Pending"
            ? "text-red-500"
            : state === "Delivered"
            ? "text-green-500"
            : ""
        }  mb-2`}
      >
        {state === "Total Order"
          ? totalCount
          : state === "Pending"
          ? pendingCount
          : state === "Delivered"
          ? deliveryCount
          : 0}
      </div>
      <div
        className={` ${
          state === "Total Order"
            ? "bg-yellow-800/50 text-yellow-200"
            : state === "Pending"
            ? "bg-red-800/50 text-red-200"
            : state === "Delivered"
            ? "bg-green-800/50 text-green-200"
            : ""
        } text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {state}
      </div>
    </div>
  );
}
