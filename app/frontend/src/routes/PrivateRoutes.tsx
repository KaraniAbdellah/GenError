import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import UserContext from "@/context/UserContext";

const PrivateRoutes = () => {
  const [userData] = useContext(UserContext);
  const location = useLocation();

  // if user not logged in and not on /login → redirect to /login
  if (!userData && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  // if user is logged in and tries to go to /login → redirect to /
  if (userData && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
