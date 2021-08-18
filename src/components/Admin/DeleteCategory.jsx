import React, { Fragment, useState, useEffect } from "react";
import getCookie from "../getCookiesFnc";

export default function DeleteCategory() {
  const [data, setData] = useState([]);
  const [remove, setRemove] = useState([]);
  useEffect(() => {
    fetch("https://pachota-backend.herokuapp.com/api/actions", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("invalid Upload");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  function filtering(id) {
    setData(data.filter((dat) => dat.id !== id));
    setRemove([...remove, id]);
  }
  function uploadToDB() {
      for(let i = 0;i < remove.length;i++){
          console.log(remove[i]);
          fetch(`https://pachota-backend.herokuapp.com/api/action/${remove[i]}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "x-access-token": getCookie('token'),
        },
        })
        .then((res) => {
            if (res.status === 401) {
                throw new Error("invalid delete");
            }
        })
        .catch((err) => console.error(err));
        }
  }
  return (
    <Fragment>
      <section className="category-route delete">
        <h2 id="category_name_remove">Delete</h2>
        <ul className="ul-data-remove">
          {data.map((value) => (
            <li
              key={value.id}
              className="map-fnc"
              onClick={() => filtering(value.id)}
            >
              {value.name}
            </li>
          ))}
        </ul>
        <button className='butt-submit-delete' onClick={uploadToDB}>Potvrdit změny</button>
      </section>
    </Fragment>
  );
}
