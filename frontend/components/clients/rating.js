import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import style from "../../styles/layout.module.scss";

const Rating = ({ rating }) => {
  const { stars } = rating;
  let { text } = rating,
    count = 0;
  text = text.replace("${stars}", stars);
  const ratingStars = Math.floor(stars);

  return (
    <>
      <div>
        {Array.apply(null, Array(ratingStars)).map(() => (
          <FontAwesomeIcon
            icon={faStar}
            color="#00c8fe"
            style={{ margin: "0 3px" }}
            key={`star-${count++}`}
          />
        ))}
        {stars % 1 !== 0 && (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            color="#00c8fe"
            style={{ margin: "0 3px" }}
            key={`star-${count++}`}
          />
        )}
        {ratingStars < 4 &&
          Array.apply(null, Array(4 - ratingStars)).map(() => (
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              style={{
                margin: "0 3px",
                stroke: "#00c8fe",
                strokeWidth: 15,
                color: "#fff",
              }}
              key={`star-${count++}`}
            />
          ))}
      </div>
      <div className={`px-2 ${style.ratingText}`}>{text}</div>
    </>
  );
};

export default Rating;
