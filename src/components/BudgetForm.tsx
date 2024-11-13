import { useState, ChangeEvent } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    const { value } = e.target
    setBudget(+value)
  }
  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-sky-600 font-bold text-center"
        >
          Definir presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value={"Definir presupuesto"}
        className="bg-sky-600 hover:bg-sky-400 cursor-pointer w-full p-2 text-white font-black uppercase"
      />
    </form>
  );
};

export default BudgetForm;
