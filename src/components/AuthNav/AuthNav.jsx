import Modal from 'react-modal';
import sprite from '../../images/sprite.svg';
import css from './AuthNav.module.css';
import { useState } from 'react';
import LoginForm from 'components/AuthForm/LoginForm';
import RegisterForm from 'components/AuthForm/RegisterForm';

const AuthNav = () => {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const openRegisterModal = () => {
    setIsModalRegisterOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const openLoginModal = () => {
    setIsModalLoginOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeRegisterModal = () => {
    setIsModalRegisterOpen(false);
    document.body.style.overflow = '';
  };

  const closeLoginModal = () => {
    setIsModalLoginOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li className={css.item}>
          <svg className={css.iconLogo} width="20" height="20">
            <use href={`${sprite}#login`} />
          </svg>
          <button
            className={css.Logbutton}
            onClick={openLoginModal}
            type="button"
          >
            Log in
          </button>
          <Modal
            isOpen={isModalLoginOpen}
            className={css.modalContent}
            overlayClassName={css.modalOverlay}
            contentLabel="Modal"
            onRequestClose={closeLoginModal}
          >
            <LoginForm onClose={closeLoginModal} />
          </Modal>
        </li>
        <li className={css.item}>
          <button
            className={css.registerButton}
            onClick={openRegisterModal}
            type="button"
          >
            Registration
          </button>
          <Modal
            isOpen={isModalRegisterOpen}
            className={css.modalContent}
            overlayClassName={css.modalOverlay}
            contentLabel="Modal"
            onRequestClose={closeRegisterModal}
          >
            <RegisterForm onClose={closeRegisterModal} />
          </Modal>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
