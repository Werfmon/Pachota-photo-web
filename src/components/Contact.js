import React from "react";
import ig from "../img/ig-logo.svg";
import gmail from "../img/gmail-icon.svg";


export default function Contact() {
  return (
    <main id="main">
      <h1 className="contact-heading">Kontakt</h1>
      <section className="contact">
          <form className='contact-form'>
              <input type='email' id='email_id' maxLength='50' placeholder='Váš Email'/>              
              <input type="text" id='subject' maxLength='50' placeholder='Předmět'/>
              <textarea name="field" id="field" rows="10" placeholder='Zde pište' defaultValue=''/>
              <input type="submit" value="Odeslat" />
          </form>
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
