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
`;

const StarRating = ({ handleChange, rating }) => {
  // Set what index is being hovered over for hover effect
  const [hover, setHover] = useState(null);

  return (
    <div>
      {/* Create an array with a length of 5 to map over and create 5 stars */}
      {[...Array(5)].map((x, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <StarInput
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={event => handleChange(event)}
            />
            <StarIcon
              size={30}
              selected={ratingValue <= (hover || rating || 0)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
