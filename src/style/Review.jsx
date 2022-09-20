import React, { useState } from "react";
import reviews from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = reviews[index];

  const leftButton = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return checkNumber(newIndex);
    });
  };
  const rightButton = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const checkNumber = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    return index;
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * reviews.length);

    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <article className="article__container">
        <img src={image} alt="article__image" className="article__image" />
        <h2 className="article__author">{name}</h2>
        <h3 className="article__job">{job}</h3>
        <p className="article__text">{text}</p>
        <article className="button__container">
          <button
            className="btn  btn__left"
            onClick={() => {
              leftButton();
            }}
          >
            left
          </button>
          <button
            className="btn  btn__right"
            onClick={() => {
              rightButton();
            }}
          >
            right
          </button>
        </article>
        <button className="btn btn__surprise" onClick={() => randomPerson()}>
          surprise
        </button>
      </article>
    </>
  );
};

export default Review;
