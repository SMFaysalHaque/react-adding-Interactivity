export default function Reports({ orderLists, setOrderLists, filterName }) {
  const allList = (
    filterName.toLowerCase() === "all"
      ? [...orderLists]
      : orderLists.filter(
          (order) =>
            order.orderStatus.toLowerCase() === filterName.toLowerCase()
        )
  ).reverse();

  const handleDeliver = (orderId) => {
    const updatedOrders = orderLists.map((order) =>
      order.orderId === orderId ? { ...order, orderStatus: "DELIVERED" } : order
    );
    setOrderLists(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orderLists.filter(
      (order) => order.orderId !== orderId
    );
    setOrderLists(updatedOrders);
  };

  return (
    <>
      {allList.map((list) => (
        <tr key={list.orderId} className="border-t border-gray-700">
          <td className="py-3">{list.orderId}</td>
          <td className="py-3">{list.name}</td>
          <td className="py-3">{list.itemCount}</td>
          <td className="py-3">{list.totalAmount}</td>
          <td className="py-3">
            <span
              className={`${
                list.orderStatus === "PENDING"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {list.orderStatus}
            </span>
          </td>
          <td className="py-3">
            <button
              onClick={() => handleDeleteOrder(list.orderId)}
              className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
            >
              Delete
            </button>
            {list.orderStatus.toUpperCase() === "PENDING" && (
              <button
                onClick={() => handleDeliver(list.orderId)}
                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
              >
                DELIVER
              </button>
            )}
          </td>
        </tr>
      ))}
    </>
  );
}
