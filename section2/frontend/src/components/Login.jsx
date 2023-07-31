import React from 'react'
const Login = () => {
    return (
            <div>
            <h2>
                login page
            </h2>
    <div className='body' style={{ width : '100%', height : '90vh',backgroundColor : 'lightPink'}}>
      <div className = 'row' style = {{display : 'flex', justifyContent : 'space-evenly'}}>
        <div className = 'col-1' style = {{backgroundColor : 'ButtonShadow', width : '40vw', height : '70vh',
         marginTop : '80px', borderRadius : '40px', border: '10px solid lightGrey'}} >
            <h3 style = {{textAlign : 'center', fontFamily : 'fantasy', paddingTop : '30px'}}>Sign Up</h3>
             <h5 style={{marginTop : '30px'}}>Name:</h5>
             <input type="text" style={{width : '80%'}}/>
             <h5>Mobile No:</h5>
             <input type="number" style={{width : '80%'}} />
             <h5>Email Id:</h5>
             <input type="email" style={{width : '80%'}}  />
             <h5>Password:</h5>
             <input type="password" style={{width : '80%'}} /> 
             <br />
             <button style = {{marginTop : '35px', width : '180px', height: '45px', marginLeft : '160px',
              backgroundColor : 'lightgreen', border: 'none', borderRadius: '15px', fontWeight: 'bold'}}>Sign UP</button>

        </div>
        <div className = 'col-2' style = {{backgroundColor : 'ButtonShadow', width : '40vw', height : '70vh',
         marginTop : '80px', borderRadius : '40px', border: '10px solid lightGrey'}}>
        <h3 style = {{textAlign : 'center', fontFamily : 'fantasy', paddingTop : '30px'}}>Login</h3>
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
              backgroundColor : 'lightblue', border: 'none', borderRadius: '15px', fontWeight: 'bold'}}>Login</button>

        </div>
      </div>
    </div>
    </div>
  )
  }
export default Login;