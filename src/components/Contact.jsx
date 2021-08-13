import React from "react";
import { Formik, Form, Field } from "formik";
import ig from "../img/ig-logo.svg";
import gmail from "../img/gmail-icon.svg";


export default function Contact() {
  return (
    <main id="main">
      <h1 className="contact-heading">Kontakt</h1>
      <section className="contact">
        <Formik initialValues={ {
            email_id: '',
            subject: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}>
          {({touched, errors}) => (
            <Form className='contact-form'>
              <Field type='email' id='email_id' maxLength='50' placeholder='Váš Email'/>              
              <Field type="text" id='subject' maxLength='50' placeholder='Předmět'/>
              <Field as='textarea' name="field" id="field" rows="10" placeholder='Zde pište' defaultValue=''/>
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
