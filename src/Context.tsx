import { createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

const AppContext = createContext(null);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
    },
  }
);

const AppProvider = ({ children }) => {
  const sharedState = {};


  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
export default AppProvider;

export { supabase };
