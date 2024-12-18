import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm.tsx";
import { useBudget } from "./hooks/useBudget.ts";
import BudgetTracker from "./components/BudgetTracker.tsx";
import ExpenseModal from "./components/ExpenseModal.tsx";
import ExpenseList from "./components/ExpenseList.tsx";
import FilterByCategory from "./components/FilterByCategory.tsx";

const App = () => {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <header className="bg-sky-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Control de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
};

export default App;
