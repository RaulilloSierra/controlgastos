import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget.ts";
import ExpenseDetail from "./ExpenseDetail.tsx";

const ExpenseList = () => {
  const { state } = useBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">Sin gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Listado de gastos
          </p>
          <div className="space-y-2">
            {state.expenses.map((expense) => (
              <ExpenseDetail key={expense.id} expense={expense} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExpenseList;
