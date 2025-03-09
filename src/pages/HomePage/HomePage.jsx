import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homeSection}>
      <div className={s.container}>
        <h2 className={s.title}>Welcome to Phonebook!</h2>
        <p className={s.text}>
          <Link className={s.linkRegister} to="/register">
            Sign up
          </Link>{' '}
          now and take control of your contacts!
        </p>
      </div>
    </div>
  );
};

export default HomePage;