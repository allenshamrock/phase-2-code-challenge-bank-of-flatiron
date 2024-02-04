import React from "react";

function SearchBar({handleFilter}) {
  return (
    <div className="w-[800px] mt-8 border-none flex justify-between items-center">
      <input
        type="Search"
        placeholder="search transaction"
        className="p-2 border-none rounded-md outline-none bg-emerald-100 align-self: flex-start;"
        onChange={(e)=>handleFilter(e.target.value)}
      />
      <p className="font-bold text-xl">Bank of Flatiron</p>
    </div>
  );
}

export default SearchBar;
