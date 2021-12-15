import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import schema from './validation/schema';
import * as yup from 'yup';

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  password: '',
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
  password: '',
  // role: '',
  // civil: '',
}

const initialDisabled = true

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

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
      <Form 
      values={formValues} 
      disabled={disabled} 
      errors={formErrors}
      change={inputChange}
      
       />
    </div>
  );
}

export default App;
