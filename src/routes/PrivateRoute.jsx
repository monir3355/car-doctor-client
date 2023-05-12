import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (user?.email) {
    return children;
  }
  if (loading) {
    return (
      <div className="text-center mt-8">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
