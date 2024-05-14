import React from 'react'
import './style.css'

function Registration() {
  return (
    <div className='text-start bg-white container p-3  text-dark py-4 rounded-3 shadow'>
        <h2 className="fs-3">Check Tour</h2>
        <div className="row">
            <div className="col-md-3">
                <div className="form-group mt-2">
                    <label htmlFor="" className='form-label'>username</label>
                    <input type="text" className="form-control p-3" placeholder='enter your name' />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group mt-2">
                    <label htmlFor="" className='form-label'>Phone number</label>
                    <input type="text" className="form-control p-3" placeholder='enter your name' />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group mt-2">
                    <label htmlFor="" className='form-label'>Your Location</label>
                    <input type="text" className="form-control p-3" placeholder='enter your name' />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group mt-2">
                    <button className="btn btn-primary p-3 mt-4 w-100">Check Now</button>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration