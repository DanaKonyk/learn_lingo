import React, { useMemo, useState } from 'react';
import sprite from '../../images/sprite.svg';
import Modal from 'react-modal';
import css from './TeachersCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/teachers/selectors';
import { toggleFavorite } from '../../redux/teachers/teachersSlice';
import ReadMoreCard from 'components/ReadMoreCard/ReadMoreCard';
import BookTrialForm from 'components/BookTrialForm/BookTrialForm';

const TeachersCard = ({ card }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();

  const isCardFavorite = useMemo(
    () => favorites.find(favorite => favorite.id === card.id),
    [favorites, card.id]
  );

  const addToFavorites = () => {
    dispatch(toggleFavorite(card));
  };

  const handleReadMore = () => {
    setIsReadMore(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };
  return (
    <>
      <li className={css.card}>
        <div className={css.avatarWrap}>
          <div className={css.statusWrap}>
            <svg width="12" height="12">
              <use href={`${sprite}#status`}></use>
            </svg>
          </div>
          <img
            className={css.avatar}
            src={card.avatar_url}
            alt="avatar"
            width={30}
          />
        </div>
        <div className={css.infoWrap}>
          <div className={css.favoriteWrap}>
            <button type="button" onClick={() => addToFavorites(card.id)}>
              <svg
                className={
                  isCardFavorite ? ` ${css.iconFavActive}` : css.iconFav
                }
                width="26"
                height="26"
              >
                <use href={`${sprite}#icon-fav`} />
              </svg>
            </button>
          </div>
          <div className={css.statWrap}>
            <ul className={css.statList}>
              <li className={css.mainText}>Languages</li>
              <div>
                <li className={css.statItem}>
                  <div className={css.statIconWrap}>
                    <svg width="16" height="16">
                      <use href={`${sprite}#book`}></use>
                    </svg>
                  </div>
                  Lessons online
                </li>
                <li className={css.statItem}>
                  Lessons done: {card.lessons_done}
                </li>
                <li className={css.statItem}>
                  <div className={css.statIconWrap}>
                    <svg width="16" height="16">
                      <use href={`${sprite}#icon-star`}></use>
                    </svg>
                  </div>
                  Rating: {card.rating}
                </li>
                <li className={css.statItem}>
                  Price / 1 hour:
                  <span className={css.priceSpan}> {card.price_per_hour}$</span>
                </li>
              </div>
            </ul>
          </div>
          <h3 className={css.nameTitle}>
            {card.name} {card.surname}
          </h3>
          <ul className={css.descList}>
            <li className={css.descItem}>
              Speaks:{' '}
              <span className={css.descSpan}>{card.languages.join(', ')}</span>
            </li>
            <li className={css.descItem}>
              Lesson Info:{' '}
              <span className={css.descSpan}>{card.lesson_info}</span>
            </li>
            <li className={css.descItem}>
              Conditions:{' '}
              <span className={css.descSpan}>{card.conditions.join(', ')}</span>
            </li>
          </ul>
          {!isReadMore && (
            <button
              className={css.moreButton}
              type="button"
              onClick={handleReadMore}
            >
              Read more
            </button>
          )}
          {isReadMore && (
            <ReadMoreCard experience={card.experience} reviews={card.reviews} />
          )}
          <ul className={css.levelList}>
            {card.levels.map((level, idx) => (
              <li className={css.levelItem} key={idx}>
                #{level}
              </li>
            ))}
          </ul>
          {isReadMore && (
            <button
              className={css.buttonBook}
              type="button"
              onClick={openModal}
            >
              Book trial lesson
            </button>
          )}
        </div>
        <Modal
          isOpen={isModalOpen}
          className={css.modalContent}
          overlayClassName={css.modalOverlay}
          contentLabel="Modal"
          onRequestClose={closeModal}
        >
          <BookTrialForm onClose={closeModal} card={card} />
        </Modal>
      </li>
    </>
  );
};

export default TeachersCard;
