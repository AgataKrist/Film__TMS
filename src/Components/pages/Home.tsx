import React from "react";
import { Title } from "../atoms/title";
import { Sidebar } from "../molecules/sidebar";

export const Home = () => {
  return (
    <div style={{ marginLeft: "150px" }}>
      <Sidebar />
      <Title title={"HOME"} />
    </div>
  );
};
