/* eslint-disable react/prop-types */
import { useState } from "react";

const AddEditItemModel = ({
  item,
  handleChange,
  addEditItem,
  handleCloseModel,
}) => {
  const [errors, setErrors] = useState({ title: false, description: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errObj = {
      title: item.title.trim() === "",
      description: item.description.trim() === "",
    };
    if (Object.values(errObj).filter((e) => e).length > 0)
      return setErrors({ ...errObj });

    addEditItem();
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm"
      onClick={handleCloseModel}
    >
      <div
        className="bg-background p-3 w-[min(90%,450px)] rounded-lg shadow-lg -translate-y-full animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center text-xl font-bold pb-2 border border-solid border-b-gray-300">
          Add Item
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="font-bold">
              Title<span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="title..."
              className={`w-full outline-none p-2 rounded-lg border border-solid ${
                errors.title ? "border-primary animate-shake" : "border-white"
              } focus:border-accent-600`}
              value={item.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="font-bold">
              Description<span className="text-primary">*</span>
            </label>
            <textarea
              type="text"
              id="description"
              placeholder="description..."
              className={`w-full min-h-[100px] outline-none p-2 rounded-lg border border-solid ${
                errors.description
                  ? "border-primary animate-shake"
                  : "border-white"
              } focus:border-accent-600`}
              value={item.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-5 py-2 bg-primary hover:bg-primary-600 text-white font-bold rounded-lg me-2"
            >
              Save
            </button>
            <button
              type="reset"
              className="px-5 py-2 bg-accent hover:bg-accent-600 text-white font-bold rounded-lg"
              onClick={handleCloseModel}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditItemModel;
