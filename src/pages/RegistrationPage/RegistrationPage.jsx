import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.wrapRegister}>
      <div className={s.boxRegister}>
        <h2 className={s.title}>Register</h2>
        <p className={s.text}>
          Register to create your phonebook
        </p>
        <RegistrationForm />
        <p className={s.text}>
          Already have an account?{' '}
          <Link className={s.linkLogin} to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;