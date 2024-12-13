import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget.ts";
import ExpenseDetail from "./ExpenseDetail.tsx";

const ExpenseList = () => {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter((ex) => ex.category === state.currentCategory)
    : state.expenses;

  const isEmpty = useMemo(
    () => filteredExpenses.length === 0,
    [filteredExpenses]
  );

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-3">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">Sin gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Listado de gastos
          </p>
          <div className="space-y-2">
            {filteredExpenses.map((expense) => (
              <ExpenseDetail key={expense.id} expense={expense} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExpenseList;
