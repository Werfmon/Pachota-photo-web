import React, { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import Image from './Image'

export default function Creation() {
  const [actions, setActions] = useState([]);


  useEffect(() => {
    fetch("https://pachota-photo-backend.herokuapp.com/api/actions", {
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
      { actions.map(action => (
        <Fragment>
          <h1 className='action-name'>{action.name}</h1>
          <div key={action.id} className='image-container'>
            <ul className='first-part-gallery'>
              {action.images.filter(image => image.id % 2 === 0).map((image) => (
                <li key={image.id}>
                  <Image link={image.link} description={image.description} />
                </li>
              ))}
            </ul>
            <ul className='second-part-gallery'>
              {action.images.filter(image => image.id % 2 !== 0).map((image) => (
                <li key={image.id}>
                <Image link={image.link} description={image.description} />
              </li>
              ))}
            </ul>
          </div>
        </Fragment>
        ))
      }
    </main>
  );
}
