import React from "react";
import { DashboardComponent, DashboardItemProps } from "common/components";
import { css } from "@emotion/css";

interface Props {
  items: DashboardItemProps[];
}

export const SumoduleListComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { items } = props;
  return <DashboardComponent items={items} />;
};
