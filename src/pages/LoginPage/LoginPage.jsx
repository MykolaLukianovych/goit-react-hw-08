import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.wrapLogin}>
      <div className={s.boxLogin}>
        <h2 className={s.title}>Login</h2>
        <p className={s.text}>Please login to your account.</p>
        <LoginForm />
        <p className={s.text}>
          New user?{' '}
          <Link className={s.linkRegister} to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;