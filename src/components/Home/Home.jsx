import { Link } from 'react-router-dom';
import girl from '../../images/home-image.png';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.wrap}>
      <div className={css.mainTextWrap}>
        <h1 className={css.mainTextTitle}>
          Unlock your potential with the best{' '}
          <span className={css.mainTextSpan}>language</span> tutors
        </h1>
        <p className={css.mainText}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link className={css.link} to="/teachers">
          Get started
        </Link>
      </div>
      <div className={css.imageWrap}>
        <img className={css.image} src={girl} alt="girl and laptop" />
      </div>
      <div className={css.statWrap}>
        <ul className={css.statList}>
          <li className={css.statItem}>
            <p className={css.statNumber}>32,000 +</p>
            <p className={css.statText}>Experienced tutors</p>
          </li>
          <li className={css.statItem}>
            <p className={css.statNumber}>300,000 +</p>
            <p className={css.statText}>5-star tutor reviews</p>
          </li>
          <li className={css.statItem}>
            <p className={css.statNumber}>120 +</p>
            <p className={css.statText}>Subjects taught</p>
          </li>
          <li className={css.statItem}>
            <p className={css.statNumber}>200 +</p>
            <p className={css.statText}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
