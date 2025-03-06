import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import s from "./ContactForm.module.css"

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const dispatch = useDispatch();

 const handleSubmit = (values, actions) => {
  dispatch(addContact(values));
  actions.resetForm();
};
  return (
      <div className={s.formContainer}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
              <Form className={s.formWrapper}>
                  <p>Name</p>
                  <Field name='name' type="text" />
                  <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                  <p>Number</p>
                  <Field name='number' type='text' />
                  <ErrorMessage name="number" component="div" style={{ color: "red" }} />
                  <button className={s.button} type='submit'>Add contact</button>
              </Form>
          </Formik>
    </div>
  )
}

export default ContactForm