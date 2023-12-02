import { useState } from "react";

import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import AddEditItemModel from "./components/AddEditItemModel";

import { defaultItems } from "./data/data";

const App = () => {
  const [addItemModel, setAddItemModel] = useState(-1);
  const [itemsList, setItemsList] = useState([...defaultItems]);

  const defaultItem = { title: "", description: "" };
  const [item, setItem] = useState(defaultItem);

  const handleCloseModel = () => {
    setAddItemModel(-1);
    setItem(defaultItem);
  };

  const handleChange = (e) =>
    setItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const addEditItem = () => {
    if (addItemModel === "new") setItemsList((prev) => [...prev, item]);
    else
      setItemsList((prev) => {
        prev[addItemModel] = item;
        return [...prev];
      });

    handleCloseModel();
  };

  const handleEdit = (itemId) => {
    setItem({ ...itemsList.find((_, i) => i === itemId) });
    setAddItemModel(itemId);
  };

  const handleDelete = (itemId) =>
    setItemsList((prev) => prev.filter((_, idx) => idx !== itemId));

  return (
    <>
      <Navbar />
      <main>
        <section className="max-w-6xl mx-auto">
          <div className="p-3 flex justify-between items-center">
            <div className="text-xl font-bold">Items</div>
            <div>
              <button
                className="px-4 py-2 font-bold bg-primary hover:bg-primary-600 hover:shadow-md text-white rounded-lg"
                onClick={() => setAddItemModel("new")}
              >
                Add Item
              </button>
            </div>
          </div>
          <ItemList {...{ itemsList, handleDelete, handleEdit }} />
          {addItemModel !== -1 && (
            <AddEditItemModel
              {...{
                item,
                handleChange,
                addEditItem,
                handleCloseModel,
              }}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default App;
