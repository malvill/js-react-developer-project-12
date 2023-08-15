import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import welcomeImg from '../../assets/img/welcome.jpeg'


export default class Login extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{login: '', password: ''}}
                validationSchema={Yup.object().shape({
                    login: Yup.string().required("Required")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form className="container mx-auto p-4 shadow-lg flex h-[400px] w-3/5 relative top-[100px] rounded-md" onSubmit={handleSubmit}>
                        <img className="rounded-md mr-4" src={welcomeImg} alt="welcome to twin peaks"/>
                        <div className="flex flex-col justify-center">
                            <div>
                                <label htmlFor="login">Ваш ник</label>
                                <input
                                    type="text"
                                    id="login"
                                    className="h-[40px] w-[300px] block shadow-lg rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name="login"
                                    onChange={handleChange}
                                    value={values.login}
                                    autoComplete="on"
                                />
                                {errors.login && touched.email}
                            </div>
                            <div>
                                <label htmlFor="password">Пароль</label>
                                <input
                                    className="h-[40px] w-[300px] block shadow-lg rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    autoComplete="on"
                                />
                                {errors.password && touched.password}
                            </div>
                            <button
                                className="bg-indigo-300 rounded-md w-[200px] shadow-lg"
                                type="submit"
                                disabled={isSubmitting}>
                                Войти
                            </button>
                        </div>
                    </form>
                )}
            </Formik>

    )
    }
}