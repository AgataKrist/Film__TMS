import * as React from "react";
import { memo } from "react";
import { Title } from "../../atoms/title";
import "./index.css";
import { VideoTrailer } from "../../atoms/videoTrailer";
import { DescriptionTrailer } from "../../atoms/descriptionTrailer";

interface ITrailerFilm {
  title: string;
  trailer: string;
  description: string;
}

export const TrailerFilm = memo(
  ({ title, trailer, description }: ITrailerFilm) => {
    return (
      <div className={"trailer__wrapper"}>
        <div className="trailer__content">
          <Title title={"Trailer: " + title} isShort={false} />
          <VideoTrailer video={trailer} />
          <DescriptionTrailer description={description} />
        </div>
      </div>
    );
  }
);
