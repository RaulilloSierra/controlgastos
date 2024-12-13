import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget.ts";
import AmountDisplay from "./AmountDisplay.tsx";
import "react-circular-progressbar/dist/styles.css";

const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget } = useBudget();

  const percentage = Math.round((totalExpenses / state.budget) * 100);

  console.log(percentage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#b33939" : "#0284C7",
            trailColor: "#aaa69d",
            textColor: percentage === 100 ? "#b33939" : "#0284C7",
          })}
          text={`${percentage}%`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg hover:bg-pink-500"
        >
          Resetear app
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;
