import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../Context.tsx";
import { checkSession } from "../services/authentication.js";

const Protected = () => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      const hasSession = await checkSession(supabase);
      setAuthToken(hasSession);
      if (!hasSession) {
        navigate("/Signin");
      }
    };

    verifySession();
  }, [navigate]);

  if (authToken === null) {
    return null;
  }

  return <Outlet />;
};

export default Protected;
