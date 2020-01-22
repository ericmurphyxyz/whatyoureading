import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StarInput = styled.input`
  display: none;
  position: absolute;
  margin-left: -9999px;
`;

const StarIcon = styled(FaStar)`
  cursor: pointer;
  fill: ${({ selected }) => (selected ? "#ffc107" : "#e4e5e9")};
  transition: 200ms fill ease-in-out;
`;

const StarRating = ({ register }) => {
  const [rating, setRating] = useState(null);
  // Set what index is being hovered over for hover effect
  const [hover, setHover] = useState(null);

  return (
    <>
      {/* Create an array with a length of 5 to map over and create 5 stars */}
      {[...Array(5)].map((x, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <StarInput
              type="radio"
              name="rating"
              value={ratingValue}
              ref={register}
              onClick={() => setRating(ratingValue)}
            />
            <StarIcon
              size={20}
              selected={ratingValue <= (hover || rating || 0)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRating;
