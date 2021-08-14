import React, { Fragment , useState} from 'react'
import { Formik, Field, Form } from 'formik'

export default function AddCategory() {
    const [data, setdata] = useState({})
    const [pictures, setPictures] = useState([]);
    const [dataBool, setDataBool] = useState(false);
    const [action, setAction] = useState('');
    return (
        <Fragment>
            <section>
                <h2 id='category-name-add'>-</h2>
                <Formik 
                    initialValues={{
                        category_name: ''
                    }}
                    onSubmit={values => {
                        values.category_name 
                        && (document.getElementById('category-name-add').innerHTML = 'Kategorie: ' + values.category_name)
                        && setDataBool(true);

                        setAction(values.category_name);
                    }}
                >
                    <Form className='add-category-form'>
                        <Field name='category_name' id='category_name' placeholder='Zadej jméno kategorie' />
                        <input type="submit" value='Přidat' />
                    </Form>
                </Formik>
                {
                    dataBool && (
                        <Fragment>
                            <h3 className='category-name-adding'>Přidání Fotek</h3>
                            <Formik
                            initialValues={{
                                link_picture_add: "",
                                description_picture_add: "",
                            }}
                            onSubmit={(values) => {
                                setPictures([...pictures, {link: values.link_picture_add, description: values.description_picture_add}]);
                            }}
                            >
                            <Form className="add-category-form-2">
                                <Field name="link_picture_add" id="link_picture_add" placeholder='URL'></Field>
                                <Field as='textarea' name="description_picture_add" id="description_picture_add" placeholder='Popis'></Field>
                                <input type="submit" value="Přidat" />
                            </Form>
                            </Formik>
                            <Formik initialValues={{}} onSubmit={() => {
                                setdata({action_name: action, pictures});
                                console.log(data);
                                console.log(pictures);
                            }}>
                            <Form className="add-category-form-2">
                                <input id='add-picture-submit-all' type="submit" value="Odeslat" />
                            </Form>
                            </Formik>
                        </Fragment>
                        )
                    }
                    </section>
        </Fragment>
        )
}
