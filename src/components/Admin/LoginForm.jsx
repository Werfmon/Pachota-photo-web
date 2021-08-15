import React, {Fragment, useContext} from 'react'
import { Formik, Field, Form } from 'formik'
import { context } from '../../App.jsx';
import * as Yup from 'yup';

const ErrorMessages = Yup.object().shape({
    login_password: Yup.string().required('Zadejte heslo'),
})
export default function LoginForm() {
    const validateEmail = useContext(context)
        return (
            
            <Fragment>
                <header className='admin-header'>
                    <h1>Login</h1>
                </header>
                <main className='admin-main'>
                    <Formik className='admin-formik' initialValues={{
                        login_email: '',
                        login_password: '',
                    }}
                    onSubmit={values => {
                        fetch('https://pachota-photo-backend.herokuapp.com/auth/login', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify({"email":values.login_email, "password":values.login_password}) 
                        })
                        .then(res => {
                            if(res.status === 401) {
                                throw new Error("invalid login");
                            }
                            return res.json();
                        })
                        .then(data => {
                            localStorage.setItem('token', data.token);
                            window.location.reload();
                        })
                        .catch(err => {
                            console.error(err)
                        })
                       
                    }}
                    validationSchema={ErrorMessages}
                    >
                        {( { errors, touched } ) => (
                            
                            <Form className='admin-form'>
                            <div>
                                <label htmlFor="login_email">Email: </label>
                                <Field validate={validateEmail} id='login_email'  className='login-field' name='login_email' type='email'/>
                            </div>
                                {touched.login_email && errors.login_email && <div className='errors'>{errors.login_email}</div>}
                            <div>
                                <label htmlFor="login_password">Password: </label>
                                <Field id='login_password' className='login-field' name='login_password' type='password'/>
                            </div>
                                {touched.login_password && errors.login_password && <div  className='errors'>{errors.login_password}</div>}
                            <input type='submit' value='Login'/>
                        </Form>
                        )}
                    </Formik>
                </main>
            </Fragment>
        )
}
