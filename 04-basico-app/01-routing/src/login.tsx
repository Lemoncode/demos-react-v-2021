import React from "react";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <>
      <h2>Hello from login page</h2>
      <Link to="/list">Navigate to list page</Link>
    </>
  );
};
