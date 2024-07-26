import ItemsList from "./ItemsList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className=" w-6/12 bg-grey shadow-2xl p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-extrabold">
            {data.title}({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
