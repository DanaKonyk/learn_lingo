import React from 'react';
import reviewer from '../../images/user-icon.webp';
import sprite from '../../images/sprite.svg';
import css from './ReadMoreCard.module.css';

const ReadMoreCard = ({ experience, reviews }) => {
  return (
    <>
      <p className={css.exprText}>{experience}</p>
      <ul className={css.reviewsList}>
        {reviews.map((review, idx) => (
          <li key={idx} className={css.reviewsItem}>
            <div className={css.reviewsWrap}>
              <div className={css.imageWrap}>
                <img
                  className={css.reviewsImg}
                  src={reviewer}
                  alt="reviewer icon"
                  width={64}
                />
              </div>
              <ul className={css.reviewersList}>
                <li className={css.reviewersItem}>{review.reviewer_name}</li>
                <li className={css.reviewersItem}>
                  <svg width="16" height="16">
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  <span className={css.reviewersSpan}>
                    {review.reviewer_rating}
                  </span>
                </li>
              </ul>
            </div>
            <p className={css.commentText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReadMoreCard;
