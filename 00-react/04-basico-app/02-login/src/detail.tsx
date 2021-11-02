import React from "react";
import { Link, useHistory } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const history = useHistory();

  const handleNavigation = () => {
    history.push("/list");
  };

  return (
    <>
      <h2>Hello from Detail page</h2>
      <button onClick={handleNavigation}>Login</button>
    </>
  );
};
