import { memo } from "react";
import "./index.css";

interface IDescriptionTrailer {
  description: string;
}

export const DescriptionTrailer = memo(
  ({ description }: IDescriptionTrailer) => (
    <div className={"descriptionTrailer"}>
      <p className={"descriptionTrailer__text"}>{description}</p>
    </div>
  )
);
