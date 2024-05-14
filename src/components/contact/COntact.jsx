import React from 'react'
import './style.css'

function COntact() {
  return (
    <div className='contact p-3 p-md-5 text-white text-center'>
        <h1 className="display-2 italic-heading mb-5">Contact us for more Offers and Travels Packages</h1>
            <div className="row">
                <div className="col-md-4 mb-3">
               <div className="card p-3 h-100 shadow" data-aos="zoom-out-down">
               <i class="bi bi-telephone-fill fs-1 text-primary"></i>
                    <h1 className="fs-2">Phone Number</h1>
                    <h3 className='fs-6'>+91 9880809988</h3>
               </div>
                </div>
                <div className="col-md-4 mb-3">
              
               <div className="card p-3 h-100 shadow" data-aos="zoom-out-down">
               <i class="bi bi-envelope-fill fs-1 text-primary"></i>
                    <h1 className="fs-2">Email Address</h1>
                    <h3 className='fs-6'>sriganeshtourandtravels@gmail.com</h3>
               </div>
                </div>
                <div className="col-md-4 mb-3">
                 <div className="card p-3 h-100 shadow" data-aos="zoom-out-down">
                 <i class="bi bi-building fs-1 text-primary"></i>
                    <h1 className="fs-2">Address</h1>
                    <h3 className='fs-6'>#764/1, 19th Main Road, Near HSR Club, HSR 2nd Sector, HSR Layout, Bengaluru, Karnataka 560102</h3>
                 </div>
                </div>
            </div>
    </div>
  )
}

export default COntact