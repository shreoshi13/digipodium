import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>
                welcome to homepage
            </h1>
            <h1 className='myclass'>
        my react app
      </h1>
      <h2 style={{color: 'green', fontSize: 50}}>
        using inline css
      </h2>
      <input type='text' />
        </div>
    )
}

export default Home;