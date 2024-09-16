import React from 'react'

export default function Form(props){

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        console.log(evt.target)
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }

    return (
        <form onSubmit={onSubmit}>
        <div className='errors'>
          <div>{errors.fname}</div>
          <div>{errors.lname}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
        <label>
        First Name:
            <input 
            onChange={onChange} 
            type='text' 
            name='fname' 
            placeholder='Enter Your Name'
            value={values.fname} />
        </label><br/>
        <label>
        Last Name:
            <input 
            onChange={onChange} 
            type='text' 
            name='lname' 
            placeholder='Enter Your Name'
            value={values.lname} />
        </label><br/>
        <label>
        Email: 
            <input 
            onChange={onChange} 
            type='email' 
            name='email' 
            placeholder='Enter Your Email'
            value={values.email} />
        </label><br/>
        <label>
        Password: 
            <input 
            onChange={onChange} 
            type='password' 
            name='password' 
            placeholder='Enter Your Password'
            value={values.password} />
        </label><br/>
        <label>
            Terms of Service
            <input 
            onChange={onChange} 
            type='checkbox' 
            name='terms'
            value={values.terms} />
        </label><br/>
        <button id="submitBtn" disabled={disabled}>Submit Info</button>
        </form>
    )
}