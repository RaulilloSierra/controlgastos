import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = (props) => {
  const { presupuesto, setPresupuesto, isValid, setIsValid } = props;
  return (
    <div>
      <header>
        <h1>Planificador de gastos</h1>
        {isValid ? (
          <p>Control Presupuesto</p>
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValid={setIsValid}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
