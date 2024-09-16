import './App.css';
import React, { useState, useEffect } from 'react';
import User from './User';
import Form from './Form';
import schema from './validation/schema';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  ///// TEXT INPUTS /////
  fname: '',
  lname: '',
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
  fname: '',
  lname: '',
  email: '',
  password: '',
  // role: '',
  // civil: '',
}

const initialData = [];
const initialDisabled = true

function App() {
  const [data, setData] = useState(initialData)
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

  const postNewData = newData => {
    axios.post('https://reqres.in/api/users', newData)
      .then(res => {
        setData([res.data, ...data]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const formSubmit = () => {
    const newData = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: ['terms'].filter(term => !!formValues[term])
    }
    postNewData(newData);
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        disabled={disabled}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
      />

      {
        data.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

    </div>



  );
}

export default App;
