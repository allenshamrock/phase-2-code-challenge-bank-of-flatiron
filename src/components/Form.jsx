import React, { useState } from "react";

function Form({ handleTransaction }) {
    const randomId = Math.floor(Math.random()*20) //Random id between 0-20

  const [formData, setFormData] = useState({
    id: randomId,
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleTransaction(formData);
    setFormData({
      id: randomId,
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }

  return (
    <form action="" onSubmit={handleSubmit} className="flex mt-10 gap-x-6 ">
      <input
        type="date"
        placeholder="Input date"
        required
        className="px-2 border rounded-md border-slate-400"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Input description"
        className="px-2 border rounded-md border-slate-400"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Input category"
        className="px-2 border rounded-md border-slate-400"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="input amount"
        className="px-2 border rounded-md border-slate-400"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />
      <button className=" border-none w-[200px] bg-red-300 rounded-xl p-2">
        Add Transaction
      </button>
    </form>
  );
}

export default Form;
