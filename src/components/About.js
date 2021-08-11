import React from "react";

import img_car1 from '../img/img-car-1.jpg'
import img_car2 from '../img/img-car-2.jpg'
import img_car3 from '../img/img-car-3.jpg'

export default function About() {
  return (
    <main id='main'>
      <section className="about-section">
        <div>
          <p className="para-1"  >
            Jsem 17letý fotograf, celým jménem <span className='span-text'>Jan Pachota</span> a pocházím z Klimkovic u Ostravy.
          </p>
          <img
            className="section-img-1"
            src={img_car3}
            alt=""
          />
          <p className="para-2">
          Focení se věnuji už přes rok a za určitý čas jsem se toho hodně naučil což se odvíjí na kvalitě mých fotek. 
          <span className='span-text'> Fotím převážně auta</span>, ale ozvat se mi můžete i s jiným stylem. Auta fotím převážně díky mojí oblibě k nim.
          </p>
          <img
            className="section-img-2"
            src={img_car2}
            alt=""
          />
          <p className="para-3">
          Nedávno jsem si tak trochu splnil sen když jsem začal fotit pro <a id='furt_bokem' href='https://furtbokem.eu/'>FURT BOKEM</a> za což jsem velice rád a posouvá mě to kupředu.
          </p>
          <img
            className="section-img-3"
            src={img_car1}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
