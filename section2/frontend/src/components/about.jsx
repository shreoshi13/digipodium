import React from 'react'
const About = () => {
    return(
        <div>
            <h2>
                about page
            </h2>
          
    <div className='body' style = {{backgroundColor : 'grey'}}>
    <div style = {{ width : '100%', height : '60px', backgroundColor : 'black'}}>
    <h2 style = {{color : 'white', textAlign : 'center', paddingTop : '10px', fontFamily : 'serif'}}>ABOUT US</h2>
    </div>
     <div className='container' style = {{width : '200vw', height : '82.3vh', backgroundColor : 'grey',position : 'relative'}} >
       <div className='row' style={{display : 'flex', justifyContent : 'space-around',alignItems : 'center', paddingTop : '100px'}}>  
        <div className='col-1' style = {{backgroundColor : 'black', color : 'white', width : '300px', height : '300px', textAlign : 'center', borderRadius : '25px'}}>
          <h4 style={{fontFamily : 'serif'}}>VISION</h4>
          <p style={{paddingTop : '25px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Consequuntur, fugiat
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat</p>
         </div>
         <div className='col-2' style = {{backgroundColor : 'black',color : 'white', width : '300px', height : '300px', textAlign : 'center',borderRadius : '25px' }}>
          <h4 style={{fontFamily : 'serif'}}>MISSION</h4>
          <p style={{paddingTop : '25px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Consequuntur, fugiat
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat</p>
         </div>
         <div className='col-3' style = {{backgroundColor : 'black',color : 'white', width : '300px', height : '300px', textAlign : 'center',borderRadius : '25px' }}>
          <h4 style={{fontFamily : 'serif'}}>VALUES</h4>
          <p style={{paddingTop : '25px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, fugiat
          </p>
         </div>
         
       </div>
    </div>
    </div>
    </div>
  )
}
export default About;
