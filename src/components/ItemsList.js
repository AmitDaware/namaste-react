import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  //   console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className=" flex justify-between p-2 m-2 border-grey-200 border-b-2 text-left"
          >
            <div
              className="flex
             flex-col py-2 w-9/12"
            >
              <span className="text-sm font-bold">{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className=" relative mx-2 bg-sky-100 w-3/12 content-center rounded-xl">
              <img src={CDN_URL + item.card.info.imageId} />
              <button
                className="p-2 bg-lime-200 absolute bottom-0  rounded-lg shadow-md"
                onClick={() => {
                  handleAddItems(item);
                }}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
