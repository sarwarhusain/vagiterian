import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
