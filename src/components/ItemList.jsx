/* eslint-disable react/prop-types */
const ItemList = ({ itemsList, handleDelete, handleEdit }) => {
  return (
    <div className="p-3">
      {itemsList?.length === 0 && (
        <div className="h-16 py-3 md:py-4 px-3 md:px-4 bg-primary-100 grid place-items-center shadow-md mb-4 rounded-lg">
          <div className="text-xl font-bold">No Item Found!</div>
        </div>
      )}
      {itemsList.map((item, i) => (
        <div
          key={i}
          className="py-3 md:py-4 px-3 md:px-4 bg-primary-100 shadow-md mb-4 rounded-lg"
        >
          <h3 className="text-lg font-bold mb-1">{item?.title}</h3>
          <p className="mb-1 italic">{item?.description}</p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 text-white font-bold bg-secondary-600 hover:bg-secondary-700 hover:shadow-md rounded-lg me-1"
              onClick={() => handleEdit(i)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 text-white font-bold bg-accent-600 hover:bg-accent-700 hover:shadow-md rounded-lg"
              onClick={() => handleDelete(i)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
