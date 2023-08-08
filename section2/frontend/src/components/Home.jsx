import React from 'react'
import myimg from '../logo.svg'

const Home = () => {
    return (
        <div style={{
        backgroundImage: `url("/background.jpg")`,
        backgroundSize: "cover",
        minHeight: "100vh",
        }}>
            <h1 className='text-center text-light'>
                Welcome 
            </h1>
            <h1 className='myclass text-dark'>
        react app
      </h1>
      <h2 className='fw-semibold text-lg-center text-light' style={{color: 'black', fontSize: 50}}>
        E-commerce website
      </h2>
        
        <img src="/logo192.png" alt="" />
        <img src={myimg} alt="" />
      
        </div>
    )
}

export default Home;