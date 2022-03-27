import React,{useState} from 'react'
import {Formik} from "formik"
import * as Yup from 'yup';


const SiginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(6, 'Password should be more than 6 length!')
});
const validate=(values,props) =>{
 const error={}
  if (!values.email) {
    error.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid email address';
  }
  return error;
};


export const SignupForm=() =>{
  return (
    <div>
    <h1>In my App</h1>
    <Formik
      initialValues={{ 
        email: '',
       password: "" 
      }}
      onSubmit={(values) => {
        console.log("values", values)
      }}
      validationSchema={SiginSchema}
    >
      {({
        values,
        error,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
      })=>(
                <form onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="email"
          />
           <input
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="password"
          />
          <p>{JSON.stringify(error)}</p>
        
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>

  )
}

