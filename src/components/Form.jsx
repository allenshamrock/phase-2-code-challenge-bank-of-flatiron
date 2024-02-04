import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
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
        className="p-2 border rounded-md border-slate-400"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Input description"
        className="p-2 border rounded-md border-slate-400"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Input category"
        className="p-2 border rounded-md border-slate-400"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="input amount"
        className="p-2 border rounded-md border-slate-400"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <button className=" border-slate-500 w-10 bg-red-300" >Submit</button>
    </form>
  );
}

export default Form;
