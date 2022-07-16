import React from 'react'
import './Body.css'

function Body() {

  const handleSubmit = (e)=> {
    e.preventDefault()
  }

  return (
    <div className='body-container'>
      <div className='title'>
        <p>FAX or CAP?</p>
        <p>Validate your news in seconds</p>
      </div>
      <div className='input-box'>
        <form onSubmit={handleSubmit}>
          <input type="text" size={110} placeholder='Enter URL'/>
          <i class="fa-solid fa-globe fa-lg"></i>
          <br/>
          <button>Check Validity</button>
        </form>
      </div>
    </div>
  )
}

export default Body