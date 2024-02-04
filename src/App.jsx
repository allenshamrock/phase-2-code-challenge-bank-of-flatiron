import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
function App() {
  const [data, setData] = useState([]); //State for storing our data
  const [filteredTransaction, setFilteredTransaction] = useState([]);

  //Using side effect to fetch data from my db
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("  http://localhost:3001/transactions");
        const data = await response.json();
        console.log(data);
        setData(data);
        setFilteredTransaction(data);
      } catch (error) {
        console.error("Failed to fetch", error.message);
      }
    };
    fetchData();
  }, []);

  function handleTransaction(formdata) {
    console.log(formdata, "in App");
    const updatedData = [...data, formdata];
    setData(updatedData);
    setFilteredTransaction(updatedData)
    console.log(updatedData, "in App");
  }

  function handleFilter(category) {
    const updatedData =
      category === ""
        ? data
        : data.filter((data) => {
            return data.category.toLowerCase().includes(category.toLowerCase());
          });
    setFilteredTransaction(updatedData);
  }
  return (
    <div className="flex flex-col items-center">
      <SearchBar handleFilter={handleFilter} />
      <Form handleTransaction={handleTransaction} />
      <Table data={filteredTransaction} />
    </div>
  );
}
export default App;
