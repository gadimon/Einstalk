import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserConntext } from "../Provider/UserProvider";



interface PrivateRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, adminOnly}) => {
  const authContext = useContext(UserConntext);
  if (!authContext) {
    throw new Error("authContext is not provider");
  }
  const { user } = authContext;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;