import { memo } from "react";
import "./index.css";

interface IRating {
  imdbVotes: number;
  imdbRating: number;
}

export const Rating = memo(({ imdbVotes, imdbRating }: IRating) => (
  <div className="rating__wrapper">
    <div className={"rating"}>
      <span className={"rating__title"}>Rating</span>
      <span className={"rating__content"}>{imdbRating}</span>
    </div>
    <div className={"voted"}>
      <span className={"voted__content"}>{imdbVotes} voted</span>
    </div>
  </div>
));
