import React from "react";

function Table({ data }) {
  return (
    <div className="flex flex-col justify-center m-auto mt-10 w-[812px] border-2 border-slate-700 p-2 rounded">
      <div className="flex py-2 border-b-2 border-slate-700 gap-x-8 gap-y-4 font-bold  bg-emerald-100">
        <p className="w-[20px]">ID</p>
        <p className="w-[90px]">Date</p>
        <p className="w-[400px]">Description</p>
        <p className="w-[100px]">Category</p>
        <p className="w-[100px] text-end">Amount</p>
      </div>
      {data.map((data, index, array) => (
        <div
          key={data.id}
          className={`flex py-2 border-b-2 cursor-pointer bg-slate-100 hover:bg-slate-300 border-slate-700 ${
            index === array.length - 1 ? "border-b-0" : ""
          } gap-x-8 gap-y-4`}
        >
          <p className="w-[20px]">{data.id}</p>
          <p className="w-[90px]">{data.date}</p>
          <p className="w-[400px]">{data.description}</p>
          <p className="w-[100px]">{data.category}</p>
          <p className="w-[100px] font-bold text-end">{data.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Table;
