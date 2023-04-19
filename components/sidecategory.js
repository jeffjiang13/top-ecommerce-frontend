import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recentCategory, selectCategory } from "../slices/categorySlice";

function SideCategory({ typesData }) {
  const dispatch = useDispatch();
  const data = useSelector(recentCategory);
  const [recent, setRecent] = useState();
    if (!Array.isArray(typesData)) {
    console.error("TypesData prop is not an array:", typesData);
    return null;
  }
  useEffect(() => setRecent(data));
  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-1/2 lg:w-auto">
      <h3 className="font-semibold mb-3 text-lg text-black">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        <li>
          <button
            className={`${
              recent == "" ? `font-semibold text-black` : ``
            } cursor-pointer`}
            onClick={() => dispatch(selectCategory(""))}
          >
            All products
          </button>
        </li>
        {typesData.map((type, idx) => (
          <li key={type.slug}>
            <button
              className={`${
                recent == type.name ? `font-semibold text-black` : ``
              } cursor-pointer`}
              onClick={() => dispatch(selectCategory(type.name))}
            >
              {type.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideCategory;
