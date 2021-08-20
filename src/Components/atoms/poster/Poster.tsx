import { memo } from "react";
import "./index.css";

interface IPoster {
  poster: string;
}

export const Poster = memo(({ poster }: IPoster) => (
  <div className="film__poster">
    <img src={poster} />
  </div>
));
