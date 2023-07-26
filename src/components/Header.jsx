import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = (props) => {
  const { presupuesto, setPresupuesto, isValid, setIsValid } = props;
  return (
    <div>
      <header>
        <h1>Planificador de gastos</h1>
        {isValid ? (
          <ControlPresupuesto presupuesto={presupuesto}/>
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
