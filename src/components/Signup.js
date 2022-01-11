import React from 'react';
import {Formik,Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const Signup = () => {
    const validate = Yup.object({
        firstName:Yup.string()
        .max(15,'Must be 15 chartres or less')
        .required('Required'),
        lastName:Yup.string()
        .max(20,'Must be 20 chartres or less')
        .required('Required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password:Yup.string()
        .min(6,'Password must be least 6 charters')
        .required('Password is required'),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must match')
        .required('Confirm password is required')
    })
    return (
        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:''
            }}
            validationSchema={validate}
            onSubmit={values =>{
                
            }}
        >
            {formik =>(
                <div>
                    <h1 className='my-4 font-weight-bold-dispay-4'>sign Up</h1>
                    
                    <Form>
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                        <button className='btn btn-dark nt-3' type="submit">Register</button>
                        <button className='btn btn-danger mt-3 ml-3' type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Signup
