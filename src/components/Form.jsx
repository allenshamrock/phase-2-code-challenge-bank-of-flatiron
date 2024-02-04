import React, { useState } from "react";

function Form({handleTransaction}) {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleTransaction(formData)
    setFormData({
      id: "",
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
      />
      <button className=" border-none w-[100px] bg-red-300 rounded-xl p-1" >Submit</button>
    </form>
  );
}

export default Form;
