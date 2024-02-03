import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]); //State for storing our data

  //Using side effect to fetch data from my db
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("  http://localhost:3001/transactions");
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Failed to fetch", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-red-500">
      {data.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.id}</p>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <p>{data.category}</p>
            <p>
              <strong>{data.amount}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
