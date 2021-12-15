import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import schema from './validation/schema';
import * as yup from 'yup';

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  // role: '',
  ///// RADIO BUTTONS /////
  // civil: '',
  ///// CHECKBOXES /////
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  // role: '',
  // civil: '',
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    //validation with yup
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
