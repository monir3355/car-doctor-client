import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
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
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
