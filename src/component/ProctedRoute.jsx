import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useEffect } from "react";

function ProctedRoute({ children }) {
  const { IsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!IsAuthenticated) navigate("/");
    },
    [IsAuthenticated, navigate]
  );
  return IsAuthenticated ? children : null;
}

export default ProctedRoute;
