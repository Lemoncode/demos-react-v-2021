import React from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "layouts";
import { routes } from "core/router";
import { SubmoduleListContainer } from "pods/submoduleList";

export const SubmoduleListScene: React.FC = () => {
  return (
    <AppLayout>
      <SubmoduleListContainer />
    </AppLayout>
  );
};
