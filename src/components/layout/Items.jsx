import Minus from "../svg/Minus";
import Plus from "../svg/Plus";

export default function Items({
  items,
  onSelectionChange,
  selectedAvailableItems,
}) {
  function toggleItem(item) {
    const exists = selectedAvailableItems.find((i) => i.id === item.id);

    const updatedList = exists
      ? selectedAvailableItems.filter((i) => i.id !== item.id)
      : [...selectedAvailableItems, item];

    onSelectionChange(updatedList);
  }

  function isSelected(id) {
    return selectedAvailableItems.some((item) => item.id === id);
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-gray-700/30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-gray-700/40 transition-all duration-300"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center mr-3">
              <img
                src={item.imgUrl}
                alt={item.food_name}
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="font-medium">{item.food_name}</h3>
              <p className="text-xs text-gray-400">BDT {item.price}</p>
            </div>
          </div>

          <button
            onClick={() => toggleItem(item)}
            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
          >
            {isSelected(item.id) ? <Minus /> : <Plus />}
          </button>
        </div>
      ))}
    </>
  );
}
