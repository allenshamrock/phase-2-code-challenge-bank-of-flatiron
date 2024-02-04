import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
function App() {
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

  function handleTransaction(formdata) {
    console.log(formdata, "in App");
    const updatedData = [...data, formdata];    
    setData(updatedData)
    console.log(updatedData, "in App");
  }
  return (
    <div className="flex flex-col items-center">
      <SearchBar />
      <Form handleTransaction={handleTransaction} />
      <Table data={data} />
    </div>
  );
}
export default App;
