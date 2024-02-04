import React from "react";

function SearchBar() {
  return (
    <div className="w-auto mt-8 border-none">
      <input
        type="Search"
        placeholder="search transaction"
        className="p-2 border-none rounded-md outline-none bg-emerald-100"
      />
    </div>
  );
}

export default SearchBar;
