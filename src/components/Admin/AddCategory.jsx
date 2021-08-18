import React, { Fragment, useState } from "react";

import { Formik, Field, Form } from "formik";

import getCookie from "../getCookiesFnc";

export default function AddCategory() {
  const [pictures, setPictures] = useState([]);
  const [dataBool, setDataBool] = useState(false);
  const [action, setAction] = useState("");

  return (
    <section className="category-route">
      <h1 className="admin-category-add-heading">Add</h1>
      <h2 id="category-name-add">-</h2>
      <Formik
        initialValues={{
          category_name: "",
        }}
        onSubmit={(values) => {
          values.category_name &&
            (document.getElementById("category-name-add").innerHTML =
              "Kategorie: " + values.category_name) &&
            setDataBool(true);
          document.getElementById("category_name").value = "";
          setAction(values.category_name);
        }}
      >
        <Form className="add-category-form">
          <Field
            maxLength="64"
            name="category_name"
            id="category_name"
            placeholder="Zadej jméno kategorie"
          />
          <input type="submit" value="Přidat" />
        </Form>
      </Formik>
      {dataBool && (
        <Fragment>
          <h3 className="category-name-adding">Přidání Fotek</h3>
          <Formik
            initialValues={{
              link_picture_add: "",
              description_picture_add: "",
            }}
            onSubmit={(values) => {
              setPictures([
                ...pictures,
                {
                  description: values.description_picture_add,
                  link: values.link_picture_add,
                },
              ]);
              document.getElementById("link_picture_add").value = "";
              document.getElementById("description_picture_add").value = "";
            }}
          >
            <Form className="add-category-form-2">
              <Field
                maxLength="512"
                name="link_picture_add"
                id="link_picture_add"
                placeholder="URL"
              ></Field>
              <Field
                maxLength="128"
                as="textarea"
                name="description_picture_add"
                id="description_picture_add"
                placeholder="Popis"
              ></Field>
              <input type="submit" value="Přidat" />
            </Form>
          </Formik>
          <Formik
            initialValues={{}}
            onSubmit={() => {
              document.getElementById("link_picture_add").value = "";
              document.getElementById("description_picture_add").value = "";

              fetch("https://pachota-backend.herokuapp.com/api/action", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  "x-access-token": getCookie("token"),
                },
                body: JSON.stringify({ name: action, images: pictures }),
              })
                .then((res) => {
                  if (res.status === 401) {
                    throw new Error("invalid Upload");
                  } else alert("Successful");
                })
                .catch((err) => console.error(err));
              console.log({ name: action, images: pictures });
            }}
          >
            <Form className="add-category-form-3">
              <input
                id="add-picture-submit-all"
                type="submit"
                value="Odeslat"
              />
            </Form>
          </Formik>
        </Fragment>
      )}
    </section>
  );
}
