import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
const contactUs = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
const Contact = () => {
    const contactUs = useFormik({
        initialValues:{
          email:""
          
        },
        onSubmit:(values)=>{
            console.log(values);
            //code to submit form to server
        },
        validationSchema : {Contact}
      });
  return (
   
    <div>
        <h1 className='container text-center mt-5'>
            Contact Us
        </h1>
        <div className='row mx-auto '>
        <div className='card'>
        <div className='card-body bg-body-black'>
        <form onSubmit={contactUs.handleSubmit}>
        
            <label>
                Name:
            </label>
            <input type="text" className='form-control' />
            <label>
                Mobile Number:
            </label>
            <input type="number" className='form-control' />
            <label>
                Email:
            </label>
            <span style={{color:'red',fontSize: '0.7em',marginLeft:10}}>{contactUs.errors.email}</span>

            <input className='form-control' type="email" name='email' placeholder="name@example.com" onChange={contactUs.handleChange} value={contactUs.values.email} />
            <label>
                Message/Query:
            </label>
            <input type="text" className='form-control' />
            <label for="formFile" class="form-label">Media Upload</label>
             <input class="form-control" type="file" id="formFile"></input>
            <button className="btn btn-secondary btn-outline-info mt-2" type="submit" value="Submit">
                Send
            </button>
            </form>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Contact