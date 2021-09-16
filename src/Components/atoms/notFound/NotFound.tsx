import { memo } from "react";
import { Title } from "../title";
import "./index.css";

export const NotFound = memo(() => (
  <div style={{ marginLeft: "150px" }}>
    <Title title={"Not found"} />
  </div>
));
