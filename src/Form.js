import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup';
import { Link } from 'react-router-dom';

export default function Form(){
    return (
        <form>
        <label>
        Name:
            <input type='text' name='name' placeholder='Enter Your Name' />
        </label><br/>
        <label>
        Email: 
            <input type='email' name='email' placeholder='Enter Your Email' />
        </label><br/>
        <label>
        Password: 
            <input type='password' name='password' placeholder='Enter Your Password' />
        </label><br/>
        <label>
            Terms of Service
            <input type='checkbox' name='terms' />
        </label><br/>
        <button type='submit'>Submit Info</button>
        </form>
    )
}