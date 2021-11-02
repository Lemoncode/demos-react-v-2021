import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";

interface QueryParams {
  id: string;
}

export const DetailPage: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<QueryParams>();

  const handleNavigation = () => {
    history.push("/list");
  };

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <button onClick={handleNavigation}>Login</button>
    </>
  );
};
