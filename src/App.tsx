import BudgetForm from "./components/BudgetForm.tsx";

const App = () => {
  return (
    <>
      <header className="bg-sky-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Control de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
};

export default App;
