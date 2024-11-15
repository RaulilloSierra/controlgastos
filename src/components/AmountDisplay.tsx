import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label: string;
  amount: number;
};

const AmountDisplay = (props: AmountDisplayProps) => {
  const { label, amount } = props;

  return (
    <>
      <p className="text-2xl text-sky-600 font-bold">
        {label}: <span className="font-black text-black">{formatCurrency(amount)}</span>
      </p>
    </>
  );
};

export default AmountDisplay;
