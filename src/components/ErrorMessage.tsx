import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <>
      <p className="bg-red-600 w-full px-2 py-3 rounded-lg text-white uppercase text-lg font-black text-center">
        {children}
      </p>
    </>
  );
};

export default ErrorMessage;
