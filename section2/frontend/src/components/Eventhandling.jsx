import React from 'react'

const Eventhandling = () => {
  return (
    <div className='container'>
       <h1 className='text-center'>
        Eventhandling
        </h1>
        <hr />
        <h3>Click Event</h3>
        <button className='btn btn-primary mt-3' onClick={ ()=>{alert('button was clicked')} }>Click</button>
        <h3 className='mt-5'>change event</h3>
        <input 
            type="text" 
            className='form-control' 
            onChange={ (e)=>{
                console.log(e.target.value);
                } } 
        />

        <input 
            type="color" 
            className='mt-5' 
            onChange={(e)=>{
                console.log(e.target.value);
                document.body.style.backgroundColor = e.target.value}
                } />
        <input type="file" className='form-control' onChange={(e)=>{console.log(e.target.files)}} />
        <input type="file" className='form-control' multiple onChange={(e)=>{console.log(e.target.files)}} />
    </div>
  )
}

export default Eventhandling;