import React, { useState } from "react";
import { memo } from "react";
import "./index.css";
import { BtnFilter } from "../../atoms/filterCardBtn";
import { IoMdStar } from "react-icons/io";

export const StarRating = memo(() => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={"card__wrapper"}>
      <div className="card__content ">
        <div className="star__content">
          {[...Array(10)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i + 1}>
                <input
                  key={i + 2}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                />
                <IoMdStar
                  key={i + 3}
                  onClick={() => setRating(ratingValue)}
                  className={"star"}
                  color={
                    ratingValue <= (hover || rating) ? "#7F7FD5" : "#c4c4c4"
                  }
                  size={50}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>
        <div className={"btn__add"}>
          <BtnFilter text={"Add RAting"} isActive />
        </div>
      </div>
    </div>
  );
});
