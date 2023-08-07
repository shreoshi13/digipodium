import { useFormik } from 'formik';
import React from 'react'
const Login = () => {
  //initializing formik
  const loginForm = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:(values)=>{
        console.log(values);
        //code to submit form to server
    }
  });
    return (
            <div>
            <h2 className='text-center'>
                login page
            </h2>
    <div className='body' style={{ width : '100%', height : '90vh',backgroundColor : 'lightPink'}}>
      <div className = 'row' style = {{display : 'flex', justifyContent : 'space-evenly'}}>
        <div className = 'col-1' style = {{backgroundColor : 'ButtonShadow', width : '40vw', height : '70vh',
         marginTop : '80px', borderRadius : '40px', border: '10px solid lightGrey'}} >
            <h3 style = {{textAlign : 'center', fontFamily : 'fantasy', paddingTop : '30px'}}>Sign Up</h3>
            <form onSubmit={loginForm.handleSubmit}>
             <h5 style={{marginTop : '30px'}}>Name:</h5>
             <input type="text" style={{width : '80%'}}/>
             <h5>Mobile No:</h5>
             <input type="number" style={{width : '80%'}} />
             <h5>Email Id:</h5>
             <input type="email" name='email' onChange={loginForm.handleChange} value={loginForm.values.email} style={{width : '80%'}}  />
             <h5>Password:</h5>
             <input type="password" name='password' onChange={loginForm.handleChange} value={loginForm.values.password} style={{width : '80%'}} /> 
             <br />
             <button style = {{marginTop : '35px', width : '180px', height: '45px', marginLeft : '160px',
              backgroundColor : 'lightgreen', border: '1px', borderRadius: '15px', fontWeight: 'bold'}}>Sign UP</button>
              </form>
        </div>
        <div className = 'col-2' style = {{backgroundColor : 'ButtonShadow', width : '40vw', height : '70vh',
         marginTop : '80px', borderRadius : '40px', border: '10px solid lightGrey'}}>
        <h3 style = {{textAlign : 'center', fontFamily : 'fantasy', paddingTop : '30px'}}>Login</h3>
        <form onChange={loginForm.handleSubmit}>
             <h5 style={{marginTop : '30px'}}>User Name:</h5>
             <input type="text" style={{width : '80%'}}/>
             <h5>Email Id:</h5>
             <input type="email" style={{width : '80%'}} />
             <h5>Password:</h5>
             <input type="password" style={{width : '80%'}}  />
             <h5>Confirm Password:</h5>
             <input type="password" style={{width : '80%'}} /> 
             <br />
             <button style = {{marginTop : '35px', width : '180px', height: '45px', marginLeft : '160px',
              backgroundColor : 'lightblue', border: '1px black', borderRadius: '15px', fontWeight: 'bold'}}>Login</button>
              </form>
        </div>
      </div>
    </div>
    </div>
  )
  }
export default Login;