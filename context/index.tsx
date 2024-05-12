import { ReactNode, createContext, useContext, useState } from "react";

const StripeContext = createContext({
  clientSecret: "",
  setClientSecret: (_val: string) => { },
});

export const useStripeContext = () => useContext(StripeContext);

export const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [clientSecret, setClientSecret] = useState("");

  return (
    <StripeContext.Provider
      value={{
        clientSecret,
        setClientSecret,
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};
