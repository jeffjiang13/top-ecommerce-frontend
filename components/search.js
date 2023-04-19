import React, { useState, useEffect } from "react";
import Router from "next/router";
import debounce from "lodash.debounce";

function Search() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchItems = async (searchTerm) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/items?name_contains=${searchTerm}`
    );
    const data = await res.json();
    setData(data);
    console.log("Data received:", data);
  };

  const debouncedFetchItems = debounce(fetchItems, 500);

  useEffect(() => {
    if (input) {
      debouncedFetchItems(input);
    } else {
      setData([]);
    }
    return () => {
      debouncedFetchItems.cancel();
    };
  }, [input]);

  const handleItemClick = (slug) => {
    console.log("Item clicked:", slug);
    setInput("");
    Router.push("/product/" + slug);
  };

  return (
    <div className="flex relative group md:ml-auto justify-between pr-4 place-items-center flex-grow h-full rounded-3xl bg-white">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-xs group pl-4 rounded-3xl p-2.5 focus:outline-none w-full text-black"
        type="text"
        placeholder="Search product"
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 100)}
      />
      <div
        className={`p-5 shadow-lg ${
          showResults ? "block" : "hidden"
        } top-11 bg-white absolute rounded-2xl w-full z-20`}
      >
        {data.length ? (
          data
            .filter((i, idx) => idx < 4)
            .map((item, idx) => {
              console.log("Rendering item:", item.slug, item.name);
              return (
                <div key={idx} onClick={() => handleItemClick(item.slug)}>
                  <div
                    className="p-2 flex place-items-center cursor-pointer text-xs font-light text-black hover:bg-gray-100 active:bg-gray-200"
                  >
                    <span>
                      <img
                        src={item.image[0].name}
                        className="w-7 h-7 mr-1 rounded-lg"
                        alt=""
                      />
                    </span>
                    {item.name}
                  </div>
                </div>
              );
            })
        ) : (
          <p className="text-xs text-black font-light">No item found</p>
        )}
      </div>
      <svg
        className="w-4 h-4 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Search;
