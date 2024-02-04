import React from "react";

function Table({data}) {

  return (
    <div className="flex flex-col justify-center m-auto mt-10 w-[812px] border-2 border-slate-700 p-2 rounded">
      {data.map((data) => {
        return (
          <div key={data.id} className="flex py-2 border-b-2 border-slate-700 not-last-child:border-b-0 gap-x-8 gap-y-4">
            <p className="w-[20px]">{data.id}</p>
            <p className="w-[90px]">{data.date}</p>
            <p className="w-[400px]">{data.description}</p>
            <p className="w-[100px]">{data.category}</p>
            <p className="w-[100px] font-bold text-end">{data.amount}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
