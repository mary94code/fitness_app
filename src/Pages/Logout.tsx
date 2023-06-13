import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type LogoutProps = {
  setToken: (token: string) => void;
};

const Logout: React.FC<LogoutProps> = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setToken("");
    navigate("/");
  }, []);

  return null;
};

export default Logout;
