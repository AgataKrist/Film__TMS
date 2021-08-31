import { memo } from "react";
import "./index.css";

interface IVideoTrailer {
  video: string;
}

export const VideoTrailer = memo(({ video }: IVideoTrailer) => {
  return (
    <iframe
      width="516"
      height="289"
      src={video}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
});
