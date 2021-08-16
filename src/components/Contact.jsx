import React, {useContext } from "react";
import { Formik, Form, Field } from "formik";
import ig from "../img/ig-logo.svg";
import gmail from "../img/gmail-icon.svg";
import { context } from '../App.jsx';
import * as Yup from 'yup';

const ErrorMessages = Yup.object().shape({
  subject: Yup.string().required('Zadejte předmět'),
  field: Yup.string().required('Zadej zprávu')
})

export default function Contact() {
  const validateEmail = useContext(context)
  return (
    <main id="main">
      <h1 className="contact-heading">Kontakt</h1>
      <section className="contact">
        <Formik initialValues={ {
            email_id: '',
            subject: '',
            field: ''
        }}
        onSubmit={(values) => {
          
          fetch('https://pachota-photo-backend.herokuapp.com/api/feedback', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'x-access-token': localStorage.getItem('token')
            },
              body: JSON.stringify({email: values.email_id, subject: values.subject, message: values.field})
          })
          .then(res => {
            if(res.status === 401) {
              throw new Error("invalid Upload");
            }
          })
          .catch(err => console.error(err));
         
          window.location.reload()
        }}
        validationSchema={ErrorMessages}
        >
          {({touched, errors}) => (
            <Form className='contact-form'>
              <Field type='text' validate={validateEmail} id='email_id' name='email_id' placeholder='Váš Email'/>  
              {touched.email_id && errors.email_id && <div className='errors2'>{errors.email_id}</div>}            
              <Field type="text" id='subject' name='subject' maxLength='64' placeholder='Předmět'/>
              {touched.subject && errors.subject && <div className='errors2'>{errors.subject}</div>}            
              <Field maxLength='512' as='textarea' name="field" id="field" rows="10" placeholder='Zde pište' defaultValue=''/>
              {touched.field && errors.field && <div className='errors2'>{errors.field}</div>}            
              <input type="submit" value="Odeslat" />
          </Form>
          )}
        </Formik>
        <div className='contact-container'>
            <div className='container-child'>
                <a className='links email' href="mailto:honzapachota@gmail.com">honzapachota@gmail.com</a>
                <a className='link-logo email-img' href="mailto:honzapachota@gmail.com">
                    <img className="logo" src={gmail} alt="gmail logo" title='gmail logo'/>
                </a>
            </div>
            <div className='container-child'>
                <a className='links ig' href="https://www.instagram.com/pachota_photos/">pachota_photos</a>
                <a href="https://www.instagram.com/pachota_photos/" className='link-logo ig-img'>
                    <img className="logo" src={ig} alt="instagram logo" title='instagram logo' />
                </a>
            </div>
        </div>
      </section>
    </main>
  );
}
