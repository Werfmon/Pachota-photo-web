import React, { useEffect, useState } from "react";

import Image from './Image'

export default function Creation() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetch("https://pachota-backend.herokuapp.com/api/actions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setActions(data)
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <main id='main'>
      <div className='google-disk-href'>
        <a rel='noreferrer' href="https://drive.google.com/drive/folders/1XDJPZAdDZtoLT_huN2LUO-cQm-hfzcme?usp=sharing" target="_blank">Všechny fotky najdete <span>zde!</span> </a>
      </div>
      {!actions[0] && <p className='loading'>Loading...</p>}
      { actions.map(action => (
        <p>Loading...</p> &&
        <div key={action.id}>
          <h1 className='action-name'>{action.name}</h1>
          <div className='image-container'>
            <ul className='first-part-gallery'>
              {action.images.filter(image => image.id % 2 !== 0).map((image) => (
                <a href={image.link}>
                  <li key={image.id}>
                    <Image link={image.link} description={image.description} />
                  </li>
                </a>
              ))}
            </ul>
            <ul className='second-part-gallery'>
              {action.images.filter(image => image.id % 2 === 0).map((image) => (
              <a href={image.link}>
                <li key={image.id}>
                  <Image link={image.link} description={image.description} />
                </li>
              </a>
              ))}
            </ul>
          </div>
        </div>
        ))
      }
    </main>
  );
}
