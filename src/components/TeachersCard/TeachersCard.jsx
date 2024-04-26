import React from 'react';
import sprite from '../../images/sprite.svg';
import css from './TeachersCard.module.css';

const TeachersCard = ({ card }) => {
  return (
    <>
      <li className={css.card}>
        <div className={css.avatarWrap}>
          <div className={css.statusWrap}>
            <svg width="12" height="12">
              <use href={`${sprite}#status`}></use>
            </svg>
          </div>
          <img src={card.avatar_url} alt="avatar" width={30} />
        </div>
        <div className={css.infoWrap}>
          <div className={css.favoriteWrap}>
            <button className={css.buttonFav} type="button">
              <svg width="26" height="26">
                <use href={`${sprite}#icon-fav`} />
              </svg>
            </button>
          </div>
          <div className={css.statWrap}>
            <p className={css.mainText}>Languages</p>
            <ul className={css.statList}>
              <li className={css.statItem}>
                <div className={css.statusWrap}>
                  <svg width="16" height="16">
                    <use href={`${sprite}#book`}></use>
                  </svg>
                </div>
                <p className={css.statText}>Lessons online</p>
              </li>
              <li className={css.statItem}>
                <p>Lessons done: {card.lessons_done}</p>
              </li>
              <li className={css.statItem}>
                <div className={css.statusWrap}>
                  <svg width="16" height="16">
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                </div>
                <p className={css.statText}>Rating: {card.rating}</p>
              </li>
              <li className={css.statItem}>
                <p className={css.statText}>
                  Price / 1 hour: <span>{card.price_per_hour}$</span>
                </p>
              </li>
            </ul>
          </div>
          <h3 className={css.nameTitle}>
            {card.name} {card.surname}
          </h3>
          <ul className={css.descList}>
            <li className={css.descItem}>
              Speaks:
              <span className={css.descSpan}>{card.languages.join(', ')}</span>
            </li>
            <li className={css.descItem}>
              Lesson Info:
              <span className={css.descSpan}>{card.lesson_info}</span>
            </li>
            <li className={css.descItem}>
              Conditions:
              <span className={css.descSpan}>{card.conditions.join(', ')}</span>
            </li>
          </ul>
          <button className={css.moreButton} type="button">
            Read more
          </button>
          <ul className={css.levelList}>
            {card.levels.map((level, idx) => (
              <li className={css.levelItem} key={idx}>
                #{level}
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default TeachersCard;
